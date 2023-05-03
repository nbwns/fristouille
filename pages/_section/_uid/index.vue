<template>
  <section class="flex flex-col justify-center layer__xl mx-auto">
	<!-- TODO: sibling pages -->
	<!-- <div class="h-16 lg:h-20">
		<grid-of-cards-articles :articles="siblings"/>
	</div> -->
	<spacer size="sm"></spacer>
		<!-- breadcrumb -->
		<breadcrumb :parentText="$prismic.asText(parent.data.title)" :parentPath="parent.url"><prismic-text :field="document.data.title"/>
	</breadcrumb>
	<spacer size="xxs"></spacer>
	
	<!-- page title -->
	<h1 class="max-w-lg">{{$prismic.asText(document.data.title)}}</h1>
	
	<spacer size="xs"></spacer>
	
    <div>
		<!-- intro -->
		<prismic-rich-text :field="document.data.introduction" class="text-big" />

		<spacer size="md"></spacer>

		<!-- content blocks -->
		<content-block v-for="block in contentBlocks" :key="block.id" 
			:title="block.primary.content_title" :content="block.primary.content_body" :image="block.primary.content_image" />
		<!-- featured recipes -->
		<featured-recipes v-for="(list, index) in horizontalLists" :key="`recipes-${index}`" :title="list.title" :items="list.recipes" :link="list.seeAllQuery" />
    </div>
	<spacer size="md"></spacer>
	<!-- call to action -->
	<call-to-action v-for="cta in ctas" :key="cta.id" 
			:ctaUrl="cta.primary.cta_url" :ctaText="cta.primary.cta_text" :ctaHeader="cta.primary.cta_header" />
</section>
</template>

<script>	
import FeaturedRecipes from '~/components/FeaturedRecipes'
import ContentBlock from '~/components/ContentBlock';
import CallToAction from '~/components/CallToAction';
import Breadcrumb from '~/molecules/Breadcrumb.vue';
import TitleArticle from '~/molecules/TitleArticle.vue';
import Spacer from '~/molecules/Spacer.vue';

export default {
  name: 'post',
  components: {
	FeaturedRecipes,
	ContentBlock,
	Breadcrumb,
	TitleArticle,
	Spacer,
	CallToAction
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
		let siblings = [];

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
			siblings = (await $prismic.api.query( 
				$prismic.predicates.at('my.childpage.parent_page', page.parent_page.id) 
			)).results.filter(i => i.uid != params.uid);

		}

		let horizontalLists = [];
		let contentBlocks = [];
		let ctas = [];

		//featured recipes
		if(page.body && page.body.length > 0){
			
			let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');

			//horizontal lists of recipes - get content from Algolia
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


		//content blocks
		if(page.body1 && page.body1.length > 0){
			contentBlocks = page.body1;
		}
		
		//calls to action
		if(page.body2 && page.body2.length > 0){
			ctas = page.body2;
		}

		// Returns data to be used in template
		return {
			document: document,
			siblings: siblings,
			parent: parent,
			horizontalLists: horizontalLists,
			contentBlocks: contentBlocks,
			ctas: ctas
		}
    } catch (e) {
      	// Returns error page
		console.log("error in child page",e);
	  	error({ statusCode: 500, message: 'Error' })
    }
  },
}
</script>