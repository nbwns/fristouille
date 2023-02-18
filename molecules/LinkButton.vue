<template>
  	<nuxt-link :to="path" class="btn">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		path: String,
		text: String,
	}
}
</script>

<style>

</style>