<template>
  <div>
    <div class="outer-container">
		<!-- breadcrumb -->
		<nav class="rounded-md w-full" v-if="parent">
			<ol class="list-reset flex">
				<li>
					<nuxt-link :to="parent.url" class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">
						<prismic-text :field="parent.data.title" />
					</nuxt-link>
				</li>
				<li><span class="text-gray-500 mx-2">/</span></li>
				<li class="text-gray-500">
					<prismic-text :field="document.title" />
				</li>
			</ol>
		</nav>
		<!-- page title -->
		<h1><prismic-text :field="document.title" /></h1>
		<!-- body -->
		<prismic-rich-text :field="document.text" />
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
		let parent = null;
		
		// Query to get post content
		const page = (await $prismic.api.getByUID('childpage', params.uid)).data

		if(page.parent_page.id){

			//Get parent page in order to create a breadcrumb
			const parents = (await $prismic.api.query( 
					$prismic.predicates.at('document.id', page.parent_page.id) 
				)).results;

			if(parents.length > 0){
				parent = parents[0];
			}
		}

		// Returns data to be used in template
		return {
			document: page,
			parent: parent
			// slices: post.body,
		}
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>