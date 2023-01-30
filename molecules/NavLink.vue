<template>
	<nuxt-link :to="url" class="block md:inline-block md:mt-0  mr-7 hover:text-coral-200 focus:text-coral-300">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props:{
		url: String
	}
}
</script>

<style>

</style>