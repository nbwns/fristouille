<template>
  <div>
	<!-- Hero introduction -->
    <section>
      <div class="flex justify-center items-center bg-reglisse-200">
        <div
          class="flex flex-col md:flex-row w-full md:w-9/12 lg:w-7/12 justify-center items-center h-auto mx-10 md:mx-0 my-10">
			<div class="block z-0 items-center h-full">
				<h1 class=" font-labil text-5xl font-medium text-white-200 pb-3 ">
					{{$prismic.asText(document.hero_title)}} <span class="text-coral-200">{{$prismic.asText(document.hero_title_emphasis)}}</span>
				</h1>
				 <h3 class="mb-10">
					{{$prismic.asText(document.intro_phrase)}}
				</h3>
				<nuxt-link :to="document.cta_page.url" class="btn">
					{{document.cta_text}}
				</nuxt-link>
			</div>
			<!-- only displayed on desktop -->
			<div class="hidden md:flex flex-shrink-0 z-50">
				<img class="" src="~/assets/img/Group 45.png" alt="">
			</div>
        </div>
      </div>
    </section>

    <!-- search -->
	<!-- only displayed on desktop -->
    <section class="hidden md:flex py-[10vh] mx-10 md:mx-0 my-10">
      <div class="flex flex-col items-center bg-reglisse-100  w-full gap-[73px] ">
		<h2 class="text-coral-200">
		Trouver des recettes
		</h2>
        <div class="flex flex-col justify-center w-full md:w-9/12 lg:w-7/12 ">
			<!-- search bar -->
			<form class="flex items-center gap-5" @submit.prevent="search">
			<label for="simple-search" class="sr-only">Que souhaitez-vous cuisiner ?</label>
			<div class="relative w-full">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg aria-hidden="true" class="w-5 h-5 text-white-200" fill="currentColor" viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clip-rule="evenodd"></path>
				</svg>
				</div>
				<input type="text" id="simple-search" v-model="query"
				class="bg-reglisse-300 rounded focus:outline-none focus:ring focus:ring-reglisse-200  block w-full pl-10 p-2.5 placeholder:text-white-200 text-white-100"
				placeholder="Que souhaitez-vous cuisiner ?" required="">
			</div>
			<button type="submit" class="bg-reglisse-300 search">
				<!-- <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
				<span class="">Rechercher</span>
			</button>
			</form>

          	<!-- tags and filter -->
			<!-- <category-tags /> -->
			<div class="flex flex-row justify-between items-center my-2 ">
				<!-- tags -->
				<div class="flex flex-row gap-4 items-center">
				<nuxt-link v-for="(t,index) in quick_search_tags" 
					:key="index" 
					:to="`/Recettes${t.tag_query}`"
					:class="t.tag_class"
					>{{t.tag_title}}</nuxt-link>
				</div>
				<!-- filters -->
				<span><nuxt-link to="/Recettes?as=true" class="font-labil text-base font-medium text-white-200">+ de filtres</nuxt-link></span>
			</div>
        </div>
      </div>
    </section>

	<!-- featured recipes -->
	<horizontal-list :title="horizontal_list.list_title" :items="featuredRecipes" :link="horizontal_list.see_all_querystring" />

	<!-- featured articles -->
	<featured-articles :items="featured_content"/> 

  </div>
</template>

<script>
import HorizontalList from '~/components/HorizontalList'
import CategoryTags from '~/components/CategoryTags'
import FeaturedArticles from '~/components/FeaturedArticles'

export default {
	components: {
		HorizontalList,
		CategoryTags,
		FeaturedArticles
	},
	data(){
		return {
			query: '',
			featuredQuery: "hiver",
			featuredSeeAllLink: "hiver"
		}
	},
	methods:{
		search(){
			//redirect to the search page with parameters in qs
			this.$router.push({
				path: '/Recettes', 
				query: { 
					q: this.query/*, 
					diet: this.searchFilters.diet,
					category: this.searchFilters.category,
					cuisine: this.searchFilters.cuisine,
					free: this.searchFilters.free,
					months: this.searchFilters.months*/
				}
			});
		}
	},
	head () {
		return {
			title: this.$prismic.asText(this.document.hero_title),
			//adapt meta 
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$prismic
						.asText(this.document.hero_title)
						.substring(0, 158)
				}
			]
		}
	},
	async asyncData({ $prismic, $axios, $config, params, error }) {
		try{
			// Query to get homepage content
			let graphQuery = {
					graphQuery: `
						{
							homepage {
								hero_title
								hero_title_emphasis
								intro_phrase
								cta_text
								cta_page
								featured_content {
									featured_page {
										...on simplepage {
											title,
											... on cover {
												image
											}
										}

										...on childpage {
											title,
											... on cover {
												image
											}
										}
									}
								}
							}
						}
					`
				};
			
			//TODO: succeed to pass graphQuery parameters to get the cover pictures of the related articles

			const page = (await $prismic.api.getSingle('homepage')).data;
			// console.log("HOMEPAGE");
			// console.log(page);
			// console.log("featured", page.body[1].items);
			// console.log("search tags", page.body[2].items);

			//TODO: index in page.body is not robust enough

			//get the horizontal list component
			let horizontal_list = page.body[0].primary; //TODO: improve because I could generate a list of horizontal lists
			console.log("horizontal_list",horizontal_list);

			//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
			const featuredRecipes = []
			//TODO: put this code back
			// (await $axios.get($config.searchIndexFunction,{ params: {
			// 		query: horizontal_list.query_term,
			// 		filters: horizontal_list.query_filters
			// 	}
			// })).data;

			//return homepage data: the page itself, featured recipes and featured content
			return {
				document: page,
				horizontal_list: horizontal_list,
				featured_content: page.body[1].items,
				quick_search_tags: page.body[2].items,
				featuredRecipes: featuredRecipes
			}
		
		} catch (e) {
			// Returns error page
			console.log("oops",e);
		}
	}
}
</script>
