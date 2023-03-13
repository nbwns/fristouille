<template>
  <div class="flex flex-col m-w-[1400px] gap-12 border-4 border-red-400 mx-auto p-4">
    <div class="outer-container">
		<!-- breadcrumb -->
		<breadcrumb :parentText="$prismic.asText(parent.data.title)" :parentPath="parent.url"><prismic-text :field="document.data.title"/></breadcrumb>
		<!-- page title -->
		<h1 class="title-article">{{$prismic.asText(document.data.title)}}</h1>
		<!-- body -->
		<prismic-rich-text :field="document.data.text" />
		<!-- featured recipes -->
		<horizontal-list v-if="horizontal_list && featuredRecipes.length > 0" v-bind="propsToPass()" />
    </div>
  </div>
</template>

<script>
import HorizontalList from '~/components/HorizontalList'
import Breadcrumb from '~/molecules/Breadcrumb.vue';
import TitleArticle from '~/molecules/TitleArticle.vue';

export default {
  name: 'post',
  components: {
	HorizontalList,
	Breadcrumb,
	TitleArticle
  },
  data(){
	return {
		passHorizontalList: false
	}
  },
  methods:{
	propsToPass() {
      const result = {};

      if (this.passHorizontalList) {
        result.title = this.horizontal_list.list_title
		result.items = this.featuredRecipes;
		result.link = this.horizontal_list.see_all_querystring;
      }

	  	console.log("props to pass", result)
      return result
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
		}

		let horizontal_list = null;
		let featuredRecipes = [];

		if(page.body && page.body.length > 0){
			//get the horizontal list component
			horizontal_list = page.body[0].primary; //TODO: improve retrieving of the slice

			//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
			featuredRecipes = (await $axios.get($config.searchIndexFunction,{ params: {
						query: horizontal_list.query_term,
						filters: horizontal_list.query_filters
					}
				})).data;

			this.passHorizontalList = true;
		}

		// Returns data to be used in template
		return {
			document: document,
			parent: parent,
			horizontal_list: horizontal_list,
			featuredRecipes: featuredRecipes
		}
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>