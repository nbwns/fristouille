<template>
	<div>
		<nuxt-link :to="path">
			<!-- card -->
			<!-- TODO: fix width properly -->
			<div class="card max-w-[350px] px-3">
				<div class="relative">
					<img class="rounded"
						:src="img"
						:alt="imgAlt" style="width: 350px">
				</div>
				<div class="pt-2">
					<h4>{{title}}</h4>
					<!-- <p>
						auteur
					</p> -->
				</div>
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
		title: String
	}
}
</script>

<style>

</style>