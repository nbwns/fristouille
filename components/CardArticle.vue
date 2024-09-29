<template>
	<!-- model with img box constrain differently on flex-container depends on situation -->
	<!-- STEPH: change display is abstract -->
	<div class="card h-96 overflow-hidden group">
		<nuxt-link :to="path" class="flex flex-col h-full">
			<div class="card-image h-2/3">
				<img class="w-full h-full object-cover" :src="img" :alt="imgAlt">
			</div>
			<div
				class="p-5 space-y-2 h-1/3 bg-black-100 dark:bg-white-100 group-hover:bg-purple-200 dark:group-hover:bg-purple-100 transition-colors duration-300">
				<h4
					class="text-big text-pretty sm:text-balance max-w-xs font-demi line-clamp-2 text-white-300 dark:text-black-300">
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