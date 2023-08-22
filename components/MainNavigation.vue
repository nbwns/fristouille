<template>
  <nav class="flex items-center justify-between flew-wrap p-4 bg-black-300 dark:bg-white-300">
    <div class="layer__xl w-full flex flex-row  md:flex-col justify-between mx-auto items-center md:items-start">
      <logo/>
      <div class="hidden md:flex flex-grow md:w-auto pt-2 ">
        <div class="flex flex-grow space-x-5">
			<nuxt-link class="navlink" to="/" no-prefetch exact>Accueil</nuxt-link>
            <nuxt-link class="navlink" to="/recettes" no-prefetch>Recettes</nuxt-link>
            <nuxt-link class="navlink" to="/recettes-de-base" no-prefetch>Recettes de base</nuxt-link>
            <nuxt-link class="navlink" to="/cuisiner-durable" no-prefetch>Cuisiner durable</nuxt-link>
        </div>
        <!-- <div>
          <a href="#"
            class="navlink">
            Connexion
          </a>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/molecules/Logo.vue';

export default {
	components:{
		Logo
	},
	mounted(){
		//console.log(this.$route.path)
	}
}
</script>

<style>

</style>