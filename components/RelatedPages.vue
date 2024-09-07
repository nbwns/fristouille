<template>
	<div v-if="pages.length > 0">
		<h2 class="!text-2xl !capitalize py-4">Continuer la vadrouille</h2>
		<div class="flex flex-wrap md:flex-nowrap gap-10 w-full noprint">
			<div v-for="(page, index) in pages" :key="`related${index}`">
				<card-article v-if="page" image-size="" :path="page.url" :img="page.data.cover.url"
					:imgAlt="page.data.cover.alt" :title="$prismic.asText(page.data.title)" />
			</div>
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

<style></style>