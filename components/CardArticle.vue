<template>
	<div class="card">
		<nuxt-link :to="path">
			<!-- card -->
			<!-- TODO: fix width properly -->
				<div class="h-40 bg-center bg-cover" :class="width" :style="{backgroundImage: 'url(' + img + ')'}" ></div>
				<!-- <div class="card-image">
					<img class="rounded"
						:src="img"
						:alt="imgAlt" >
				</div> -->


				<div class="pt-4">
					<h4 class="text-big">{{title}}</h4>
					<p class="text-usual">auteur</p>
					<!-- <p>
						auteur
					</p> -->
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
		width: String,
	}
}
</script>

<style>

</style>