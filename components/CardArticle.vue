<template>
	<!-- model with img box constrain differently on flex-container depends on situation -->
	 <!-- STEPH: change display is abstract -->
	<div class="card !min-h-96">
		<nuxt-link :to="path">
			<div class="card-image">
				<img class="rounded w-full max-h-44 md:max-h-48 lg:max-h-52 xl:max-h-56 object-cover " :src="img"
					:alt="imgAlt">
			</div>
			<div class="p-5 space-y-2">
				<h4 class="text-big text-pretty sm:text-balance max-w-xs">{{ title }}</h4>
			</div>
			<prismic-rich-text :field="abstract" v-if="abstract" class="hidden md:flex">	
				{{ abstract }}
			</prismic-rich-text>
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
		author: String,
		abstract: String
	}
}
</script>

<style></style>