<template>
	<div class="container">
		<div v-if="error.statusCode === 404">
			<!-- design 404 here -->
			<h1>Page non trouvée</h1>
		</div>
		<div v-else>
	  		<!-- design error here -->
			<h1>Une erreur s'est produite</h1>
		</div>
	  	<nuxt-link to="/">Retourner à l'accueil</nuxt-link>
	</div>
  </template>
  
  <script>
  export default {
	props: ['error']
  }
  </script>