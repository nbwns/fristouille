<template>
	<section class="flex flex-col justify-center layer__xl mx-auto">
		<spacer size="md"></spacer>
		
		<div v-if="error.statusCode === 404">
			<!-- design 404 here -->
			<p class="text-big">Cette page n'existe pas 👻</p>
		</div>
		<div v-else>
	  		<!-- design error here -->
			  <p class="text-big">Une erreur s'est produite 😓</p>
		</div>

		<spacer size="xs"></spacer>

	  	<nuxt-link class="navlink"  to="/">Retourner à l'accueil</nuxt-link>

		<spacer size="md"></spacer>

	</section>
  </template>
  
  <script>
  import Spacer from '~/molecules/Spacer.vue';
  export default {
	props: ['error'],
	components: {Spacer}
  }
  </script>