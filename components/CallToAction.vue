<template>
	<div class="flex flex-grow flex-col items-center">
		<div class="text-big">
			<div class="flex flex-col font-labil font-light p-14 text-white-300 text-center" >
				<span class="pb-3">{{ ctaHeader }}</span>
				<a class="btn" :href="ctaUrl.url" :target="ctaUrl.target">{{ ctaText}}</a>
				<spacer size="sm"></spacer>
			</div>
		</div>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
 props: ['ctaUrl', 'ctaText', 'ctaHeader'],
 components:{
		Spacer
	}
}
</script>

<style>

</style>