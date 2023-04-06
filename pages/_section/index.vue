<template>
  <section class="flex flex-col justify-center items-center layer__xl  border-4 mx-auto">
	<spacer h="75"></spacer>
	<div class="layer__lg items-center flex flex-col">
		<!--  page title -->
		<h1 class="max-w-md text-center">
			<prismic-text :field="document.data.title" />
		 </h1>
			<spacer h="75"></spacer>
				<!-- body  -->
			<prismic-rich-text :field="document.data.text" class=" text-left" />
		<spacer h="75"></spacer>
	</div>			
		<!-- child pages  -->
	 		<grid-of-cards-articles :articles="children"/>
	 <spacer h="175"></spacer>
  </section>
</template>

<script>
import GridOfCardsArticles from '~/components/GridOfCardsArticles.vue'
import Spacer from '~/molecules/Spacer.vue'
export default {
  name: 'post',
  components: {
	GridOfCardsArticles,
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
  async asyncData({ $prismic, params, error }) {
    try{
	 
	 	// Query to get post content
    	const page = (await $prismic.api.getByUID('simplepage', params.section))
	 	// Get child pages
		const children = (await $prismic.api.query( 
				$prismic.predicates.at('my.childpage.parent_page', page.id) 
			)).results

		console.log(children);

      // Returns data to be used in template
      return {
        document: page,
		children: children
      }
    } catch (e) {
      // Returns error page
	  console.log(e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>