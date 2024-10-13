<template>
  <div id="app" :class="{ 'dark': $store.state.dark }" class="flex flex-col min-h-screen bg-background d-2">
    <header>
      <MainNavigation />
    </header>
    <div class="flex-grow bg-background">
      <Nuxt />
    </div>
    <footer-links />
    <mobile-navigation />
  </div>
</template>

<style></style>

<script>
import MainNavigation from '~/components/MainNavigation.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
import FooterLinks from '~/components/FooterLinks.vue'

export default {
  components: {
    MainNavigation,
    MobileNavigation,
    FooterLinks
  },
  computed: {
    dark() {
      return this.$store.state.dark;
    }
  }
}
</script>
