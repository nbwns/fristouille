<template>
	<div class="w-full">
		<div class="flex flex-col w-full space-y-1">
			<hyper-link v-for="c in articles" :key="c.id" :path="c.url">
				{{ $prismic.asText(c.data.title) }}
			</hyper-link>
		</div>
	</div>
</template>

<script>
import HyperLink from '~/molecules/HyperLink.vue'

export default {
	props: ["articles"],
	components: {
		HyperLink
	}

}
</script>

<style></style>