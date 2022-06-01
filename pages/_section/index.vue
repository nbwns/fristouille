<template>
  <div>
    <div class="outer-container">
      <small>Section</small>
      <!-- Template for page title -->
      <h1 class="text-3xl"><prismic-text :field="document.title" /></h1>
	  <prismic-rich-text :field="document.text" />
      <!-- Template for published date -->
      <!-- <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p> -->
    </div>
    <!-- Slice Block Componenet tag -->
    <!-- <slices-block :slices="slices"/> -->
  </div>
</template>

<script>
//Importing all the slices components
// import SlicesBlock from '~/components/SlicesBlock.vue'
export default {
  name: 'post',
  components: {
    // SlicesBlock
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.title),
	 //adapt meta 
	  meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.document.title)
            .substring(0, 158)
        }
      ]
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const page = (await $prismic.api.getByUID('simplepage', params.section)).data
      // Returns data to be used in template
      return {
        document: page,
        // slices: post.body,
        // formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>