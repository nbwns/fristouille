<template>
  <div>
	<div class="flex flex-grow md:flex-row flex-col justify-center" :class="{'md:flex-row-reverse': reverse, 'flex-col-reverse': reverse}">
		<div class="text-left w-full self-center">
			<prismic-rich-text :field="content" />
		</div>
		<div v-if="image.url">
			<img :src="image.url" :alt="image.alt" class="px-5 rounded"/>
		</div>
		<div v-else-if="ctaUrl && ctaText">
			<div class="flex flex-col font-labil font-light p-14 text-white-300 text-center" >
				<span class="pb-3">{{ ctaHeader }}</span>
				<a class="btn" :href="ctaUrl.url" :target="ctaUrl.target">{{ ctaText}}</a>
			</div>
		</div>
	</div>
	<spacer size="md"></spacer>
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