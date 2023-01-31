<template>
  	<nuxt-link :to="path" class="button mt-10 uppercase">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		path: String,
		text: String
	}
}
</script>

<style>

</style>