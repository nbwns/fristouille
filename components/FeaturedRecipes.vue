<template>
	<!-- section cards 4 columns -->
    <section class="flex w-full items-center mx-auto justify-center py-10">
      <div class="flex flex-col layer__xl space-y-3 ">
        <!-- title row -->
        <div class="flex flex-row justify-between items-end">
			<title-paragraph>{{title}}</title-paragraph>
			<hyper-link v-if="link" :path="`/Recettes${link}`">Tout voir</hyper-link>
        </div>

        <ssr-carousel
            loop
            :slides-per-page='3' 
            :gutter='30' 
            show-arrows
			peek-right='10%'
            :responsive='[
                {
					maxWidth: 1280,
					slidesPerPage: 3,
					gutter: 20,
                },
                {
					maxWidth: 1024,
					slidesPerPage: 2,
					gutter: 10,
                },
                {
					maxWidth: 640,
					slidesPerPage: 1,
					gutter: 10,
                }
            ]'             
            >
            <div class="slide" v-for="item in items" :key="item.objectID">
                <card-recipe 
                :diet="item.diet"
                :img="item.pictureMedium"
                :recipeID="item.objectID"
                :slug="item.slug" 
                :totalTime="item.totalTime"
                :author="item.authorName"
                :title="item.name"/>                
            </div>
        </ssr-carousel>

      </div>
    </section>
</template>

<script>
import CardRecipe from './CardRecipe.vue';
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import HyperLink from '~/molecules/HyperLink.vue';
import Spacer from '~/molecules/Spacer.vue';
import SsrCarousel from 'vue-ssr-carousel';


export default {
	props: ['title', 'link', 'items'],
	components: {CardRecipe, TitleParagraph, HyperLink, SsrCarousel, Spacer},
	methods: {
		
	}
}
</script>

<style scoped>
  .ssr-carousel-track { @apply justify-start }
  .ssr-carousel-back-icon, .ssr-carousel-next-icon {
    @apply !bg-black-300
  }
  :not([aria-disabled]) > .ssr-carousel-back-icon, :not([aria-disabled]) > .ssr-carousel-next-icon {
    @apply opacity-75
  }
  .ssr-carousel-next-button {
    @apply -right-6
  }
  .ssr-carousel-back-button {
    @apply -left-6
  }
</style>