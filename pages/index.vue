<template>
  <div class="">
    <h1 class="text-3xl"><prismic-text :field="document.hero_title" /></h1>
	<horizontal-list title="Recettes du moment" query="hiver" link="hiver" />
	<category-tags />
  </div>
</template>

<script>
import HorizontalList from '~/components/HorizontalList'
import CategoryTags from '~/components/CategoryTags'

export default {
	components: {
		HorizontalList,
		CategoryTags
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
	async asyncData({ $prismic, params, error }) {
		try{
			// Query to get homepage content
			const page = (await $prismic.api.getSingle('homepage')).data;
			console.log(page)
			console.log(page.body.items)
			return {
				document: page,
				// slices: post.body,
				// formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.date)),
			}
		
		} catch (e) {
		// Returns error page
		error({ statusCode: 404, message: 'Page not found' })
		}
	}
}
</script>
