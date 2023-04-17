<template>
  <div class="flex flex-grow flex-col items-center">
	
		<div v-if="image.url" class="w-full layer__md">
			<img :src="image.url" :alt="image.alt" class="rounded object-cover w-1/2"/>
			<spacer size="sm"></spacer>
		</div>
		<div v-else-if="ctaUrl && ctaText" class="text-big">
	
			<div class="flex flex-col font-labil font-light p-14 text-white-300 text-center" >
				<span class="pb-3">{{ ctaHeader }}</span>
				<a class="btn" :href="ctaUrl.url" :target="ctaUrl.target">{{ ctaText}}</a>
				<spacer size="sm"></spacer>
			</div>
		</div>
		<div class="text-left w-full self-center">
			<prismic-rich-text :field="content" />
			<spacer size="sm"></spacer>
		</div>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: ['content', 'image', 'ctaUrl', 'ctaText', 'ctaHeader', 'reverse'],
	components:{
		Spacer
	}
}
</script>

<style>

</style>