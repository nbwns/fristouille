<template>
	<!-- MODEL AS BG IMAGE LIKE CARD RECIPE -->

	<!-- <div class="card">
		<nuxt-link :to="path">
				<div  class="bg-center bg-cover" :class="imageSize" :style="{backgroundImage: 'url(' + img + ')'}" ></div>
				<div class="pt-4">	
					<h4 class="text-big">{{title}}</h4>
					<p class="text-usual">auteur</p>
				</div>
		</nuxt-link>
	</div> -->

	<!-- model with img box constrain differently on flex-container depends on situation -->
	<div class="card">
		<nuxt-link :to="path">
	
				<div class="card-image">
					<img class="rounded w-full max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 object-cover "
						:src="img"
						:alt="imgAlt" >
				</div>
				<div class="p-5">	
					<h4 class="text-bigbig text-pretty sm:text-balance max-w-xs">{{title}}</h4>
					<!-- <p class="text-usual">auteur</p> -->
				</div>
		</nuxt-link>
	</div>
</template>

<script>






export default {
	props:{
		path: String,
		img: String,
		imgAlt: String,
		title: String,
		imageSize: String,
	}
}
</script>

<style>

</style>