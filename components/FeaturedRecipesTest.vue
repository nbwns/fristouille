<template>
	<!-- section cards 4 columns -->
    <section class="flex w-full items-center mx-auto justify-center ">
      <div class="flex flex-col layer__xl space-y-3 ">
        <!-- title row -->
        <div class="flex flex-row justify-between">
			<title-paragraph>{{title}}</title-paragraph>
			<hyper-link v-if="link" :path="`/Recettes${link}`">Tout voir</hyper-link>
        </div>


        <!-- Mettre le nouveau carousel ici :  -->

        <ssr-carousel 
            :slides-per-page='4' 
            :gutter='30' 
            show-arrows
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
                gutter: 0,
                }
            ]'             
            >
            <slide v-for="item in items" :key="item.objectID">
                <card-recipe 
                :diet="item.diet"
                :img="item.pictureMedium"
                :recipeID="item.objectID"
                :slug="item.slug"
                :tags="item.tags"
                :author="item.authorName"
                :title="item.name"
                
                        />
                
            </slide>

        </ssr-carousel>
<!-- 
		<vue-horizontal>			
            <section v-for="item in items" :key="item.objectID" class="flex flex-row pr-6">
                <card-recipe 
                :diet="item.diet"
                :img="item.pictureMedium"
                :recipeID="item.objectID"
                :slug="item.slug"
                :tags="item.tags"
                :author="item.authorName"
                :title="item.name"
                
                        />
            </section>
		</vue-horizontal> -->
      </div>
    </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';
import CardRecipe from './CardRecipe.vue';
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import HyperLink from '~/molecules/HyperLink.vue';
import GridOfCardsRecipes from './GridOfCardsRecipes.vue';
import Spacer from '~/molecules/Spacer.vue';
import SsrCarousel from 'vue-ssr-carousel';
import ssrCarouselCss from 'vue-ssr-carousel/index.css';


export default {
	props: ['title', 'link', 'items'],
	components: {VueHorizontal, CardRecipe, TitleParagraph, HyperLink, GridOfCardsRecipes, SsrCarousel, Spacer},
	methods: {
		
	}
}
</script>

<style >

</style>