<template>
	<nuxt-link :to="path"
		class="text-base font-anonymous font-medium text-orange-300  dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: ["path"]
}
</script>

<style></style>