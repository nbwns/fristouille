<template>
 <div v-if="pages.length > 0">
	<h2>Continuer la vadrouille</h2> 
	<div class="flex flex-wrap md:flex-nowrap gap-10 w-full noprint">
		<card-article v-for="c in pages" :key="c.id"
			image-size=""
			:path="c.url"
			:img="c.data.cover.url"
			:imgAlt="c.data.cover.alt"
			:title="$prismic.asText(c.data.title)"/>
	</div>
	<spacer size="md"></spacer>
</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: ["pages"],
	components: {
		Spacer
	}
}
</script>

<style>

</style>