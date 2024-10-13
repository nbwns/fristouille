<template>
	<div
		class="flex flex-col flex-grow justify-between w-full rounded-md bg-secondary h-full max-h-72 group border border-primary-foreground/10 hover:border-primary-foreground/60 overflow-clip hover:bg-primary/80 transition-colors duration-300">
		<nuxt-link :to="path" class="flex flex-col justify-start h-full">
			<div class="h-[37rem] overflow-hidden">
				<img class="w-full h-full object-cover" :src="img" :alt="imgAlt">
			</div>
			<div class="flex flex-col justify-between p-3 space-y-4 h-full">
				<h4
					class="text-primary-foreground text-lg leading-tight text-pretty sm:text-balance max-w-xs font-demi line-clamp-2">
					{{ title }}
				</h4>
				<div class="flex flex-col space-y-2">
					<!-- Placeholder for layout consistency -->
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		path: String,
		img: String,
		imgAlt: String,
		title: String,
		imageSize: String,
		author: String
	}
}
</script>

<style></style>
