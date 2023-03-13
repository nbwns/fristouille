<template>
	<!-- section cards 4 columns -->
    <section class="grid place-items-center py-[10vh] space-y-10 mx-10 md:mx-0">
      <div class="flex flex-col w-full md:w-9/12 lg:w-7/12 space-y-3">
        <!-- title row -->
        <div class="flex flex-row justify-between">
			<title-paragraph>{{title}}</title-paragraph>

			<hyper-link :path="`/Recettes${link}`">Tout voir</hyper-link>
         
        </div>
		<vue-horizontal>			
			<!-- the grid does not work with vue horizontal -->
			<!-- <grid-of-cards-recipes :recipes="items"/> -->
			<card-recipe v-for="item in items" :key="item.objectID" 
				:diet="item.diet"
				:img="item.pictureMedium"
				:recipeID="item.objectID"
				:slug="item.slug"
				:title="item.name" />
		</vue-horizontal>
      </div>
    </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';
import CardRecipe from './CardRecipe.vue';
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import HyperLink from '~/molecules/HyperLink.vue';
import GridOfCardsRecipes from './GridOfCardsRecipes.vue';

export default {
	props: ['title', 'link', 'items'],
	components: {VueHorizontal, CardRecipe, TitleParagraph, HyperLink, GridOfCardsRecipes},
	methods: {
		
	}
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