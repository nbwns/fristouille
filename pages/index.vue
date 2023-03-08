<template>
  <div>
	<!-- Hero introduction -->
    <section>
      <div class="flex justify-center items-center bg-reglisse-200">
        <div
          class="flex flex-col md:flex-row w-full md:w-9/12 lg:w-7/12 justify-center items-center h-auto mx-10 md:mx-0 my-10">
			<div class="block z-0 items-center h-full">
				<big-title :emphasis="$prismic.asText(document.data.hero_title_emphasis)">{{$prismic.asText(document.data.hero_title)}}</big-title>
				
				<title-article>{{$prismic.asText(document.data.intro_phrase)}}</title-article>
				 
				<div v-if="document.data.cta_page.type !== 'broken_type'" class="mt-10">
					<link-button :path="document.data.cta_page.url">
						{{document.data.cta_text}}
					</link-button>
				</div>
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
			<form class="flex items-center gap-5" action="/Recettes">
				<div class="relative w-full">
					<search-bar value="" placeholder="Que voulez-vous cuisiner ?" required="true"></search-bar>
				</div>
				<submit-button>Rechercher</submit-button>
			</form>

          	<!-- tags and filter -->
			<!-- <category-tags /> -->
			<div class="flex flex-row justify-between items-center my-2 ">
				<!-- tags -->
				<div class="flex flex-row gap-4 items-center">
				<nuxt-link v-for="(t,index) in quick_search_tags" 
					:key="index" 
					:to="`/Recettes${t.tag_query}`"
					>
						<tag :look="t.tag_class">{{t.tag_title}}</tag>
					</nuxt-link>
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
	<featured-articles :title="featured_content.title" :items="featured_content.items"/> 

  </div>
</template>

<script>
import HorizontalList from '~/components/HorizontalList'
import CategoryTags from '~/components/CategoryTags'
import FeaturedArticles from '~/components/FeaturedArticles'
import SearchBar from '~/components/SearchBar.vue'
import SubmitButton from '~/molecules/SubmitButton.vue'
import Tag from '~/molecules/Tag.vue'
import BigTitle from '~/molecules/BigTitle.vue'
import TitleArticle from '~/molecules/TitleArticle.vue'
import LinkButton from '~/molecules/LinkButton.vue'

export default {
	components: {
		HorizontalList,
		CategoryTags,
		FeaturedArticles,
		SearchBar,
		SubmitButton,
		Tag,
		BigTitle,
		TitleArticle,
		LinkButton
	},
	data(){
		return {
			query: "",
			featuredQuery: "",
			featuredSeeAllLink: ""
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
			title: this.document.data.meta_title,
			meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.document.data.meta_description
					},
					{
						hid: 'og:title',
						name: 'og:title',
						content: this.document.data.meta_title
					},
					{
						hid: 'og:description',
						name: 'og:description',
						content: this.document.data.meta_description
					},
					{
						hid: 'og:image',
						name: 'og:image',
						content: this.document.data.facebook_image.url
					},
					{
						hid: 'og:url',
						name: 'og:url',
						content: `https://www.fristouille.org${this.document.url}` 
					}
				]
		}
	},
	async asyncData({ $prismic, $axios, $config, params, error }) {
		try{			
			const document =  (await $prismic.api.getSingle('homepage'));
			const page = document.data;
			// console.log("HOMEPAGE");
			// console.log(page);
			//console.log("featured", page.body[1]);

			//get the documents of the related articles 
			let featured_ids = page.body[1].items.map(i =>  i.featured_page.id );
			const featured_documents = (await $prismic.api.query( 
				$prismic.predicates.any('document.id', featured_ids) 
			)).results

			//title + articles of the featured content
			let featured_content = {title: page.body[1].primary.featured_title, items: featured_documents};
			console.log(featured_content);

			//TODO: index in page.body is not robust enough

			//get the horizontal list component
			let horizontal_list = page.body[0].primary; //TODO: improve because I could generate a list of horizontal lists
			// console.log("horizontal_list",horizontal_list);

			//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
			const featuredRecipes = (await $axios.get($config.searchIndexFunction,{ params: {
					query: horizontal_list.query_term,
					filters: horizontal_list.query_filters
				}
			})).data;

			//return homepage data: the page itself, featured recipes and featured content
			return {
				document: document,
				horizontal_list: horizontal_list,
				featured_content: featured_content,
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
