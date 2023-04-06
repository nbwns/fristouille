<template>
  <nav class="flex items-center justify-between flew-wrap p-4 bg-black-300 dark:bg-white-300">
    <div class="layer__2xl w-full mx-auto">
      <logo/>
      <div class="hidden md:flex flex-grow md:w-auto pt-2 ">
        <div class="flex flex-grow space-x-5">
        <nav-link path="/">Accueil</nav-link>
            <nav-link path="/recettes">Rechercher</nav-link>
            <nav-link path="/recettes-de-base">Recettes de base</nav-link>
            <nav-link path="/cuisine-durable">Cuisine durable</nav-link>
        </div>
        <div>
          <a href="#"
            class="navlink">
            Connexion
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/molecules/Logo.vue';
import NavLink from '~/molecules/NavLink.vue';

export default {
	components:{
		Logo,
		NavLink
	},
	mounted(){
		console.log(this.$route.path)
	}
}
</script>

<style>

</style>