<template>
	<nuxt-link :to="path"
		class="font-medium font-sans tracking-normal text-primary-foreground hover:text-label focus:text-label transition-colors duration-300"
		no-prefetch>
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		path: String
	}
}
</script>

<style></style>