<template>
	<div class="flex flex-grow flex-col" :class="{ 'bg-black-100 dark:bg-white-100 py-5 px-5 rounded-md': callout }">
		<h2 class="!text-xl">{{ title }}</h2>
		<div>
			<prismic-rich-text :field="content" class="text-usual" />
			<spacer size="sm" v-if="!callout"></spacer>
		</div>
		<div v-if="image.url" class="flex justify-center">
			<prismic-image :field="image" widths="thumbnails" class="rounded object-cover w-full" />
		</div>
		<spacer v-if="image.url" size="sm"></spacer>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: ['title', 'content', 'image', 'callout'],
	components: {
		Spacer
	}
}
</script>

<style></style>