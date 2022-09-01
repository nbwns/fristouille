<template>
  <nav class="flex items-center justify-between flew-wrap p-4 bg-reglisse-100">
    <div class="flex flex-shrink-0 text-coral-200 mr-10 text-4xl font-labil font-bold">
      Fristouille
    </div>
    <div class="hidden md:flex flex-grow md:w-auto pt-2 ">
      <div class="flex flex-grow text-lg text-white-200 font-inter capitalize font-medium ">
        <nuxt-link to="/" class="block md:inline-block md:mt-0  mr-7 hover:text-coral-200 focus:text-coral-300">Accueil</nuxt-link>
	  	<nuxt-link to="/Recettes" class="block md:inline-block md:mt-0  mr-7 hover:text-coral-200 focus:text-coral-300">Rechercher</nuxt-link>
	  	<nuxt-link to="/cuisine-durable" class="block md:inline-block md:mt-0 mr-7 hover:text-coral-200 focus:text-coral-300">Cuisine durable</nuxt-link>
      </div>
      <div>
        <a href="#"
          class="inline-block text-lg leading-none text-white-200 font-inter capitalize font-bold hover:text-coral-200 lg:-mr-7-0">
          Connexion
        </a>
      </div>
    </div>
    <div class="md:hidden ">test</div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>