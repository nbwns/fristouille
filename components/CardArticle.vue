<template>
	<!-- model with img box constrain differently on flex-container depends on situation -->
	<!-- STEPH: change display is abstract -->
	<div
		class="flex flex-col flex-grow justify-between w-full rounded bg-secondary h-96 border border-primary-foreground/10 overflow-hidd group">
		<nuxt-link :to="path" class="flex flex-col h-full">
			<div class="card-image h-2/3">
				<img class="w-full h-full object-cover" :src="img" :alt="imgAlt">
			</div>
			<div class="p-5 space-y-2 h-1/3 bg-secondary group-hover:bg-primary/80 transition-colors duration-300">
				<h4 class="text-big text-pretty sm:text-balance max-w-xs font-demi line-clamp-2 text-primary-foreground">
					{{ title }}</h4>
			</div>
		</nuxt-link>
	</div>
</template>

<script>

export default {
	props: {
		path: String,
		img: String,
		imgAlt: String,
		title: String,
		imageSize: String,
		author: String
	}
}
</script>

<style></style>