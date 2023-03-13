<template>
  <section class="flex flex-col m-w-[1400px] gap-12 border-4 border-red-400 mx-auto p-4">
      <!--  page title -->
      <h1><prismic-text :field="document.data.title" /></h1>
	  <!-- body  -->
	  <prismic-rich-text :field="document.data.text" />
	  <hr/>
	 <!-- child pages  -->
	 <grid-of-cards-articles :articles="children"/>

  </section>
</template>

<script>
import GridOfCardsArticles from '~/components/GridOfCardsArticles.vue'

export default {
  name: 'post',
  components: {
	GridOfCardsArticles
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