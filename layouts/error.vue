<template>
	<section class="flex flex-col justify-center layer__xl mx-auto">
		<spacer size="md"></spacer>
		
		<div class="w-full flex flex-row justify-start items-center gap-10">
			<draw-radish class="max-w-[90px] py-8" />
			<div
				class="basis-4/6 text-balance text-primary-foreground font-normal font-sans text-lg leading-tight ligatures-none">
			
				<div v-if="error.statusCode === 404">
					<!-- design 404 here -->
					je suis bredouille, cette page n'existe pas !
				</div>
				<div v-else>
					<!-- design error here -->
					y'a une embrouille... une erreur s'est produite. peux-tu le signaler à <a href="nicolas@fristouille.org">nicolas@fristouille.org</a> ?
				</div>

				<spacer size="xs"></spacer>

	  			<nuxt-link class="text-sm font-mono font-medium text-primary-foreground hover:text-accent hover:cursor-pointer hover:underline"
				    to="/">retourne à l'accueil</nuxt-link>


			</div>
		</div>
	</section>
  </template>
  
  <script>
  	import Spacer from '~/molecules/Spacer.vue';
	import DrawRadish from '~/molecules/DrawRadish.vue'

	export default {
		props: ['error'],
		components: {Spacer, DrawRadish}
	}
  </script>