<template>
  <div class="flex flex-grow flex-col">
		<h2 class="text-2xl">{{ title }}</h2>
		<div>
			<prismic-rich-text :field="content" class="text-big" />
			<spacer size="sm"></spacer>
		</div>
		<div v-if="image.url" class="layer__md">
			<img :src="image.url" :alt="image.alt" class="rounded object-cover mx-auto w-1/2"/>
			<spacer size="sm"></spacer>
		</div>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: ['title', 'content', 'image'],
	components:{
		Spacer
	}
}
</script>

<style>

</style>