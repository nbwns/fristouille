<template>
	<section class="container space-y-8 lg:space-y-12 py-12">
		<!-- body  -->
		<hero-article-section :title="document.data.title" :text="document.data.text" :children="children"
			:display-as-links="document.data.display_as_links" />

		<!-- child pages  -->
		<grid-of-cards-articles :articles="children" v-if="!document.data.display_as_links" />

	</section>
</template>

<script>
import GridOfCardsArticles from '~/components/GridOfCardsArticles.vue'
import Spacer from '~/molecules/Spacer.vue'
import HeroArticleSection from '~/components/HeroArticleSection.vue'

export default {
	name: 'SectionPage',
	components: {
		GridOfCardsArticles,
		Spacer,
		HeroArticleSection
	},
	head() {
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
	async asyncData({ $prismic, params, error }) {
		try {

			// Query to get post content
			const page = (await $prismic.api.getByUID('simplepage', params.section));

			let children = [];
			if (page) {
				// Get child pages
				children = (await $prismic.api.query(
					$prismic.predicates.at('my.childpage.parent_page', page.id)
				)).results

				children.sort((a, b) => a.data.position - b.data.position);
			}

			// Returns data to be used in template
			return {
				document: page,
				children: children
			}
		} catch (e) {
			// Returns error page
			console.log("error in top page", e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
}
</script>
