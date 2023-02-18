<template>
	<nuxt-link :to="path" class="navlink">
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