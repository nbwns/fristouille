<template>
  <header class="flex flex-col py-6 mb-6 lg:py-0 space-y-12 w-full text-balance">
    <div class="flex flex-col space-y-6">
		<h1 class="font-sans text-primary-foreground text-xl lg:text-3xl font-medium lowercase leading-none text-balance w-full">
			{{ $prismic.asText(title) }}
		</h1>
		<prismic-rich-text :field="introduction"
			class="w-full text-balance prose-p:text-balance prose-p:text-primary-foreground prose-p:font-light prose-p:lg:font-light prose-p:font-sans prose-p:text-base prose-p:lg:text-lg prose-p:leading-tight prose-p:ligatures-none" />
    </div>
  </header>
</template>

<script>
import Breadcrumb from '~/molecules/Breadcrumb.vue';

export default {
  name: 'ArticleHeader',
  components: {
    Breadcrumb
  },
  props: ['title', 'introduction', 'parentTitle', 'parentUrl'] 
}
</script>
