<template>
	<!-- model with img box constrain differently on flex-container depends on situation -->
	<div class="card !min-h-96" v-if="article">
		<h2 class="title">l'astuce fristouille</h2>
		<nuxt-link :to="article.url">
			<div class="card-image">
				<img class="rounded w-full max-h-44 md:max-h-48 lg:max-h-52 xl:max-h-56 object-cover " :src="article.data.cover.url" :alt="article.data.cover.alt">
			</div>
			<div class="p-5 space-y-2">
				<h4 class="text-big text-pretty sm:text-balance max-w-xs font-demi line-clamp-2">{{ $prismic.asText(article.data.title) }}</h4>
			</div>
			<prismic-rich-text :field="article.data.tip_abstract" v-if="article.data.tip_abstract" class="hidden md:flex" />
		</nuxt-link>
	</div>
</template>

<script>

export default {
	props: ['article']
}
</script>

<style></style>