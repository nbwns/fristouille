<template>
  <div class="flex flex-grow flex-col">
		<h2 class="text-2xl">{{ title }}</h2>
		<div>
			<prismic-rich-text :field="content" class="text-big" />
			<spacer size="sm"></spacer>
		</div>
		<div v-if="image.url" class="flex justify-center">
			<prismic-image :field="image" widths="thumbnails" class="rounded object-cover mx-auto"/>
		</div>
		<spacer v-if="image.url" size="sm"></spacer>
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