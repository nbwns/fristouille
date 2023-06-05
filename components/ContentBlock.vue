<template>
  <div class="flex flex-grow flex-col items-center">
		<h2>{{ title }}</h2>
		<div class="text-left w-full self-center">
			<prismic-rich-text :field="content" />
			<spacer size="sm"></spacer>
		</div>
		<div v-if="image.url" class="w-full layer__md">
			<img :src="image.url" :alt="image.alt" class="rounded object-cover w-1/2"/>
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