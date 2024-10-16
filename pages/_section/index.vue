<template>
	<section class="container space-y-8 lg:space-y-12 pt-12">
		<!-- body  -->
		<div class="flex lg:flex-row-reverse justify-start w-full gap-6 lg:gap-12">

			<div class="flex flex-col space-y-4 text-left w-full max-w-lg">
				<h1
					class="font-sans text-primary-foreground text-2xl lg:text-3xl font-medium leading-none lowercase text-balance">
					<prismic-text :field="document.data.title" />
				</h1>
				<prismic-rich-text :field="document.data.text" class="text-base font-sans text-balance" />
				<div class="w-full pt-10">
					<list-of-links :articles="children" v-if="document.data.display_as_links" />
				</div>

			</div>

			<hero-illustration-section class-name="hidden lg:block" />

		</div>



		<!-- child pages  -->
		<grid-of-cards-articles :articles="children" v-if="!document.data.display_as_links" />

		<spacer size="sm"></spacer>



	</section>
</template>

<script>
import GridOfCardsArticles from '~/components/GridOfCardsArticles.vue'
import ListOfLinks from '~/components/ListOfLinks.vue'
import Spacer from '~/molecules/Spacer.vue'
import HeroIllustrationSection from '~/components/HeroIllustrationSection.vue'

export default {
	name: 'post',
	components: {
		GridOfCardsArticles,
		ListOfLinks,
		Spacer,
		HeroIllustrationSection
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
