<template>
  	<nuxt-link :to="url" class="button mt-10 uppercase">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		url: String,
		text: String
	}
}
</script>

<style>

</style>