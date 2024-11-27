<template>
  <div class="flex flex-col-reverse lg:flex-row-reverse justify-start w-full gap-6 lg:gap-12">
    <div class="flex flex-col space-y-4 text-left w-full max-w-lg">
	<h1
		class="font-sans text-primary-foreground text-2xl lg:text-3xl font-medium leading-none lowercase text-balance">
		{{ $prismic.asText(title) }}
	</h1>
     <h2>
		<prismic-rich-text :field="text" class="text-base font-sans text-balance text-primary-foreground font-medium" />
	</h2> 
      <div class="w-full pt-10" v-if="displayAsLinks">
        <list-of-links :articles="children" />
      </div>
    </div>
    <hero-illustration-section class="hidden lg:block" />
  </div>
</template>

<script>
import ListOfLinks from '~/components/ListOfLinks.vue'
import HeroIllustrationSection from '~/components/HeroIllustrationSection.vue'

export default {
  name: 'HeroArticleSection',
  components: {
    ListOfLinks,
    HeroIllustrationSection
  },
  props: ['title', 'text', 'children', 'displayAsLinks']
}
</script>
