<template>
	<section class="container space-y-8 lg:space-y-12 py-12">
		<!-- body  -->
		<hero-article-section :title="document.data.title" :text="document.data.text" :children="children"
			:display-as-links="document.data.display_as_links" />

		<!-- child pages  -->
		<grid-of-cards-articles :articles="children" v-if="!document.data.display_as_links" />

		<recipe-categories v-if="recipeCategories" :content="recipeCategories.primary.content" :ingredients="ingredients" />
	</section>
</template>

<script>
import GridOfCardsArticles from '~/components/GridOfCardsArticles.vue'
import Spacer from '~/molecules/Spacer.vue'
import HeroArticleSection from '~/components/HeroArticleSection.vue'
import RecipeCategories from '~/components/RecipeCategories';


export default {
	name: 'SectionPage',
	components: {
		GridOfCardsArticles,
		Spacer,
		HeroArticleSection,
		RecipeCategories
	},
	head() {
		return {
			title: `${this.document.data.meta_title} - Fristouille, la cuisine durable en toute simplicité`,
			meta: [
				{
					hid: 'og:title',
					name: 'og:title',
					content: `${this.document.data.meta_title} - Fristouille, la cuisine durable en toute simplicité`
				},
				{
					hid: 'description',
					name: 'description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:image',
					name: 'image',
					property: 'og:image',
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
	async asyncData({ $prismic, $axios, $config: { ingredientsFunction }, params, error }) {
		try {

			// Query to get post content
			const page = (await $prismic.api.getByUID('simplepage', params.section));

			let children = [];
			if (page) {
				// Get child pages
				children = (await $prismic.api.query(
					$prismic.predicates.at('my.childpage.parent_page', page.id)
				)).results.filter(c => c.data.show_in_grid == true);

				children.sort((a, b) => a.data.position - b.data.position);
			}

			//the "recettes par categories" is a slice that should be unique.
			let recipeCats = null;
			let ingredients = [];
			console.log(page.data.body)
			if (page.data.body && page.data.body.length > 0) {
				try {
					let recipeCatsSlices = page.data.body.filter(s => s.slice_type === 'recipecategories');
					if(recipeCatsSlices.length > 0){
						recipeCats = recipeCatsSlices[0];
						//get the list of ingredients from Airtable
						ingredients = (await $axios.get(ingredientsFunction)).data;
					}

				}
				catch (error) {
					console.log('error in top page/recipecategories when retrieving ingredients',$config.ingredientsFunction, error)
				}
			}

			// Returns data to be used in template
			return {
				document: page,
				children: children,
				recipeCategories: recipeCats,
				ingredients: ingredients
			}
		} catch (e) {
			// Returns error page
			console.log("error in top page", e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
}
</script>
