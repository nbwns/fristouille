<template>
  <nav class="flex items-center justify-between flew-wrap px-1 py-3 md:p-4 bg-black-300 dark:bg-white-300">
    <div class="layer__xl w-full flex flex-row justify-between mx-auto items-center">
      <logo />
      <div class="hidden md:flex flex-grow md:w-auto pt-2 ">
        <div class="flex flex-grow space-x-5 justify-end items-center">
          <nuxt-link class="navlink" to="/" no-prefetch exact>Accueil</nuxt-link>
          <nuxt-link class="navlink" to="/recettes" no-prefetch>Recettes</nuxt-link>
          <nuxt-link class="navlink" to="/astuces" no-prefetch>Astuces</nuxt-link>
          <form class="flex items-center gap-5" action="/Recettes" @submit="checkRoute">
            <div class="relative w-full">
              <search-bar placeholder="Rechercher des recettes" required="true"></search-bar>
            </div>
          </form>
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
import SearchBar from '~/components/SearchBar.vue'

export default {
  components: {
    Logo,
    SearchBar

  },
  computed: {
    searchQuery(){
      return this.$store.state.searchQuery;
    }
  },
  methods: {
	checkRoute(e){
		//if we hit search on the recipe page, do not submit the form and trigger the search (the 'togglesearch' must change each time)
		if(this.$route.path.toLowerCase().startsWith("/recettes")){
			e.preventDefault();
			this.$store.commit('toggleSearchFromBar', `query:${this.searchQuery}`);
		}
	}
  }
}
</script>

<style></style>