<template>
  <section class="flex w-full items-center mx-auto justify-center py-10">
      <div	class="flex flex-col layer__xl space-y-3">
        <!-- title row -->
        <div class="flex flex-row justify-between">
		  <title-paragraph>
            {{title}}
		  </title-paragraph>

		  <hyper-link v-if="link" :path="link">Tout voir</hyper-link>
        </div>
        <!-- grid for cards 2-columns -->
        <vue-horizontal>	
			<grid-of-cards-articles :articles="items"/>
        </vue-horizontal>
      </div>
    </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import HyperLink from '~/molecules/HyperLink.vue';
import GridOfCardsArticles from './GridOfCardsArticles.vue';

export default {
	props: ['title','items', 'link'],
	components: {VueHorizontal, TitleParagraph, HyperLink, GridOfCardsArticles},
}
</script>

<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}
</style>