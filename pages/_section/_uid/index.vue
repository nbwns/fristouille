<template>
  <section class="flex flex-col justify-center layer__2xl mx-auto">
	<spacer class=" h-24 lg:h-28 "></spacer>
		<!-- breadcrumb -->
		<breadcrumb :parentText="$prismic.asText(parent.data.title)" :parentPath="parent.url"><prismic-text :field="document.data.title"/>
	</breadcrumb>
	<spacer class="h-10"></spacer>
	
	<!-- page title -->
	<h1 class="max-w-lg">{{$prismic.asText(document.data.title)}}</h1>
	<spacer class="h-10"></spacer>
	
    <div class="layer__xl">
		<!-- body -->
		<prismic-rich-text :field="document.data.text" />
			<!-- featured recipes -->
			<featured-recipes v-for="(list, index) in horizontalLists" :key="index" :title="list.title" :items="list.recipes" :link="list.seeAllQuery" />
    </div>
	<spacer h="275"></spacer>
</section>
</template>

<script>	
import FeaturedRecipes from '~/components/FeaturedRecipes'
import Breadcrumb from '~/molecules/Breadcrumb.vue';
import TitleArticle from '~/molecules/TitleArticle.vue';
import Spacer from '~/molecules/Spacer.vue';

export default {
  name: 'post',
  components: {
	FeaturedRecipes,
	Breadcrumb,
	TitleArticle,
	Spacer
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
		let parent = null;

		// Query to get post content
		const document = (await $prismic.api.getByUID('childpage', params.uid));
		const page = document.data;

		if(page.parent_page.id){

			//Get parent page in order to create a breadcrumb
			const parents = (await $prismic.api.query( 
					$prismic.predicates.at('document.id', page.parent_page.id) 
				)).results;

			if(parents.length > 0){
				parent = parents[0];
			}

			// Get siblings pages
			// const siblings = (await $prismic.api.query( 
			// 	$prismic.predicates.at('my.childpage.parent_page', page.parent_page.id) 
			// )).results;

			// console.log("siblings", siblings.filter(i => i.uid != params.uid));
		}

		let horizontalLists = [];

		if(page.body && page.body.length > 0){
			
			let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');

			//horizontal lists of recipes
			horizontalLists = await Promise.all(
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
		}

		// Returns data to be used in template
		return {
			document: document,
			parent: parent,
			horizontalLists: horizontalLists,
		}
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>