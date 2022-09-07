<template>
	<!-- section cards 4 columns -->
    <section class="grid place-items-center py-[10vh] space-y-10 mx-10 md:mx-0">
      <div class="flex flex-col w-full md:w-9/12 lg:w-7/12 space-y-3">
        <!-- title row -->
        <div class="flex flex-row justify-between">
          <h3 class=" text-lg font-inter font-semibold text-white-200">
            {{title}}
          </h3>
          <nuxt-link :to="`/Recettes?query=${link}`"
		  			class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">Tout voir</nuxt-link>
        </div>
			<!-- grid for cards 4-columns -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7  md:gap-x-7 md:gap-y-10 w-full place-items-center">
				<RecipeCard v-for="item in items" :key="item.objectID" :searchResult="item" />
			</div>
      </div>
    </section>
</template>

<script>
export default {
	props: ['title', 'query', 'link', 'items'],
	methods: {
		
	}
}
</script>

<style>

</style>