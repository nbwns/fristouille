<template>
  	<nav class="rounded-md w-full">
		<ol class="list-reset flex">
			<li>
				<nuxt-link :to="parentPath" class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">
					{{parentText}}
				</nuxt-link>
			</li>
			<li><span class="text-gray-500 mx-2">/</span></li>
			<li class="text-gray-500">
				{{childText}}
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	props:{
		parentText: String,
		parentPath: String,
		childText: String
	}
}
</script>

<style>

</style>