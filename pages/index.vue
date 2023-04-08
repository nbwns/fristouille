<template>
  <div>
	<!-- Hero introduction -->
    <section>
      <div class="flex flex-col justify-center items-center bg-black-200">
		<spacer size="xl"></spacer>
        <div class="flex flex-col md:flex-row layer__xl justify-between items-center h-auto mx-auto">
			<div class="block z-0 items-center h-full">
				<big-title :emphasis="$prismic.asText(document.data.hero_title_emphasis)" class="max-w-md ">{{$prismic.asText(document.data.hero_title)}}</big-title>
				
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
      <div class="flex flex-col items-center bg-black-200  w-full gap-[73px] ">
		<h2 class="text-coral-200">
		Trouver des recettes
		</h2>
        <div class="flex flex-col justify-center layer__xl">
			<!-- search bar -->
			<form class="flex items-center gap-5" action="/Recettes">
				<div class="relative w-full">
					<search-bar value="" placeholder="Que voulez-vous cuisiner ?" required="true"></search-bar>
				</div>
				<submit-button>Rechercher</submit-button>
			</form>

          	<!-- tags -->
			<div class="flex flex-row justify-between items-center my-2 ">
				<div class="flex flex-row gap-4 items-center">
					<!-- seasons tags -->
					<nuxt-link v-for="s in currentSeasons" 
						:key="s" 
						:to="`/Recettes?${getSeasonQuery(s)}`"
						>
						<tag look="primary">{{s}}</tag>
					</nuxt-link>
					<!-- quick search tags -->
					<nuxt-link v-for="(t,index) in quickSearchTags" 
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
	<!-- <featured-recipes v-for="(list, index) in horizontalLists" :key="'r'+index" :title="list.title" :items="list.recipes" :link="list.seeAllQuery" /> -->
	<FeaturedRecipesTest v-for="(list, index) in horizontalLists" :key="'r'+index" :title="list.title" :items="list.recipes" :link="list.seeAllQuery" />

	<!-- featured articles -->
	<featured-articles v-for="(list, index) in articlesLists"  :key="'a'+index" :title="list.title" :items="list.items" :link="list.seeAllLink"/>

  </div>
</template>

<script>
import FeaturedRecipes from '~/components/FeaturedRecipes'
import CategoryTags from '~/components/CategoryTags'
import FeaturedArticles from '~/components/FeaturedArticles'
import SearchBar from '~/components/SearchBar.vue'
import SubmitButton from '~/molecules/SubmitButton.vue'
import Tag from '~/molecules/Tag.vue'
import BigTitle from '~/molecules/BigTitle.vue'
import TitleArticle from '~/molecules/TitleArticle.vue'
import LinkButton from '~/molecules/LinkButton.vue'
import Spacer from '~/molecules/Spacer.vue'
import FeaturedRecipesTest from '~/components/FeaturedRecipesTest.vue'


export default {
	components: {
		FeaturedRecipesTest,
		FeaturedRecipes,
		CategoryTags,
		FeaturedArticles,
		SearchBar,
		SubmitButton,
		Tag,
		BigTitle,
		TitleArticle,
		LinkButton,
		Spacer

	},
	data(){
		return {
			query: "",
			featuredQuery: "",
			featuredSeeAllLink: "",
			seasonsAndMonths:{
				winter: {11: "Décembre", 0: "Janvier",1:"Février",2:"Mars"},
				spring: {2: "Mars", 3:"Avril", 4:"Mai", 5:"Juin"},
				summer: {5: "Juin",6: "Juillet",7: "Août",8: "Septembre"},
				autumn: {8: "Septembre", 9: "Octobre", 10: "Novembre",11: "Décembre"}
			}
		}
	},
	computed:{
		currentSeasons(){
			let month= new Date().getMonth();

			let seasons = [];
			if(month in this.seasonsAndMonths.winter){
				seasons.push("hiver");
			}
			if(month in this.seasonsAndMonths.spring){
				seasons.push("printemps");
			}
			if(month in this.seasonsAndMonths.summer){
				seasons.push("été");
			}
			if(month in this.seasonsAndMonths.autumn){
				seasons.push("automne");
			}

			return seasons;
		}
	},
	methods:{
		getSeasonQuery(s){
			let months;
			switch(s){
				case "hiver":
					months = Object.values(this.seasonsAndMonths.winter);
					break;

				case "printemps":
					months = Object.values(this.seasonsAndMonths.spring);
					break;

				case "été":
					months = Object.values(this.seasonsAndMonths.summer);
					break;

				case "automne":
					months = Object.values(this.seasonsAndMonths.autumn);
					break;

			}

			return months.map((m) => `months=${m}`).join('&'); 
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

			let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');
			let featuredContentsSlices = page.body.filter(s => s.slice_type === 'featured_content');
			let quickSearchTagsSlices = page.body.filter(s => s.slice_type === 'quick_search_tags');

			//horizontal lists of recipes
			let horizontalLists = await Promise.all(
				horizontalListsSlices.map(async (hl) => {
					//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
					const featuredRecipes = (await $axios.get($config.searchIndexFunction,{
						params: {
							query: hl.primary.query_term,
							filters: hl.primary.query_filters
						}
					}
					)).data;

					return {
						title: hl.primary.list_title,
						seeAllQuery: hl.primary.see_all_querystring,
						recipes: featuredRecipes
					}
				})
			);

			let articlesLists = await Promise.all(
				featuredContentsSlices.map(async (fc) =>{
					//get the documents of the related articles
					let featured_ids = fc.items.map(i =>  i.featured_page.id );
					const featured_documents = (await $prismic.api.query( 
						$prismic.predicates.any('document.id', featured_ids) 
					)).results

					return {
						title: fc.primary.featured_title, 
						seeAllLink: fc.primary.see_all_link.url,
						items: featured_documents
					};
				})
			);

			//return homepage data: the page itself, featured recipes and featured content
			return {
				document: document,
				horizontalLists: horizontalLists,
				articlesLists: articlesLists,
				quickSearchTags: quickSearchTagsSlices[0].items,
			}
		
		} catch (e) {
			// Returns error page
			console.log("error in homepage",e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	}
}
</script>
