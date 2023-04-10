<template>
  	<nuxt-link :to="path" class="btn" :target="target">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		path: String,
		target: String
	}
}
</script>

<style>

</style>