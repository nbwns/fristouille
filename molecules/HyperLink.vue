<template>
	<nuxt-link :to="path"
		class="text-sm font-mono font-medium text-primary-foreground hover:text-accent hover:cursor-pointer hover:underline">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: ["path"]
}
</script>

<style></style>