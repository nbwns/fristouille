<template>
  <nav class="flex items-center justify-between flew-wrap px-1 py-3 md:p-4 bg-background ligatures-none">
    <div class="container w-full flex flex-row justify-between mx-auto items-center">
      <logo />
      <div class="hidden md:flex flex-grow md:w-auto pt-2 ">
        <div class="flex flex-grow space-x-5 justify-end items-center">
          <nuxt-link
            class="text-base font-medium font-sans tracking-normal text-alt lowercase hover:text-primary-foreground focus:text-foreground transition-colors duration-300"
            to="/" no-prefetch exact>Accueil</nuxt-link>
          <nuxt-link
            class="text-base font-medium font-sans tracking-normal text-alt lowercase hover:text-primary-foreground focus:text-foreground transition-colors duration-300"
            to="/recettes/" no-prefetch>Recettes</nuxt-link>
          <nuxt-link
            class="text-base font-medium font-sans tracking-normal text-alt lowercase hover:text-primary-foreground focus:text-foreground transition-colors duration-300"
            to="/astuces/" no-prefetch>Astuces</nuxt-link>
          <form class="flex items-center gap-5" action="/recettes/" @submit="checkRoute">
            <div class="relative w-full">
              <search-bar placeholder="rechercher des recettes"></search-bar>
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
import { useSearchStore } from '~/store/search'
import { storeToRefs } from 'pinia'


export default {
  components: {
    Logo,
    SearchBar

  },
  setup() {
    const searchStore = useSearchStore()
    const { searchFilters, searchQuery, launchSearchFromBar } = storeToRefs(searchStore)

    return {
      searchStore,
      searchFilters,
      searchQuery,
      launchSearchFromBar
    }
  },
  methods: {
    checkRoute(e) {
      //if we hit search on the recipe page, do not submit the form and trigger the search (the 'togglesearch' must change each time)
      if (this.$route.path.toLowerCase().startsWith("/recettes")) {
        e.preventDefault();
        this.searchStore.toggleSearchFromBar(`query:${this.searchQuery}`);
      }
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  @apply text-primary-foreground;
}
</style>
