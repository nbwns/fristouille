<template>
	<div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7  md:gap-x-7 md:gap-y-10 w-full ">
		<card-recipe v-for="item in recipes" :key="item.objectID" 
			:diet="item.diet"
			:img="item.pictureMedium"
			:recipeID="item.objectID"
			:slug="item.slug"
			:tags="item.tags"
			:author="item.authorName"
			:title="item.name" />
	</div>
</template>

<script>
import CardRecipe from './CardRecipe.vue';
export default {
	props: ['recipes'],
	components: {CardRecipe}
}
</script>

<style>

</style>