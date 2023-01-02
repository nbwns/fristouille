<template>
	<!-- section cards 4 columns -->
    <section class="grid place-items-center py-[10vh] space-y-10 mx-10 md:mx-0">
      <div class="flex flex-col w-full md:w-9/12 lg:w-7/12 space-y-3">
        <!-- title row -->
        <div class="flex flex-row justify-between">
          <h3 class=" text-lg font-inter font-semibold text-white-200">
            {{title}}
          </h3>
          <nuxt-link :to="`/Recettes?q=${link}`"
		  			class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">Tout voir</nuxt-link>
        </div>
		<vue-horizontal>			
			<recipe-card v-for="item in items" :key="item.objectID" :searchResult="item" />
		</vue-horizontal>
      </div>
    </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';
import RecipeCard from './RecipeCard.vue';

export default {
	props: ['title', 'link', 'items'],
	components: {VueHorizontal, RecipeCard},
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