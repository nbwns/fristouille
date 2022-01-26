<template>
  <div>
	  	<div class="relative">
			<h2 class="text-xl">Recettes par catégories</h2>
			<div class="absolute inset-y-0 right-0 w-16"><nuxt-link to="">tout voir</nuxt-link></div>
		</div>
		<div>
			<nuxt-link to="/Recettes?query=brocoli">
				<span class="rounded-full bg-gray-500 p-1 m-2 text-white">
					avec du brocoli
				</span>
			</nuxt-link>
			<nuxt-link to="/Recettes?query=italie">
				<span class="rounded-full bg-gray-500 p-1 m-2  text-white">
					cuisine italienne
				</span>
			</nuxt-link>
		</div>
  </div>
</template>

<script>
export default {
	mounted(){

	}
}
</script>

<style>

</style>