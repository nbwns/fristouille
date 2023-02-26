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
	<div>
		<nuxt-link :to="path">
			<div class="card"></div>		
				<div class="card-image">
					<img class="rounded"
						:src="img"
						:alt="imgAlt" >
				</div>
				<div class="pt-4">	
					<h4 class="text-big">{{title}}</h4>
					<p class="text-usual">auteur</p>
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