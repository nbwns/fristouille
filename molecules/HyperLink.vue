<template>
  <nuxt-link :to="path"
		class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props:["path"]
}
</script>

<style>

</style>