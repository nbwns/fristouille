<template>
  	<nuxt-link :to="path" class="btn">
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

<style>

</style>