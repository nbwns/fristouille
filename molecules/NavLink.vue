<template>
	<nuxt-link :to="path" class="navlink" no-prefetch exact-path>
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props:{
		path: String
	}
}
</script>

<style>


</style>