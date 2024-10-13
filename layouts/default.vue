<template>
  <div id="app" :class="{ 'dark': darkMode }" class="flex flex-col min-h-screen bg-background d-2">
    <header>
      <MainNavigation />
    </header>
    <div class="flex-grow bg-background">
      <Nuxt />
    </div>
    <dark-mode-toggle />
    <!-- <footer-links /> -->
    <mobile-navigation />
  </div>
</template>

<style></style>

<script>
import { defineComponent, onMounted, computed } from '@nuxtjs/composition-api'
import { useDarkModeStore } from '~/store/darkMode'
import MainNavigation from '~/components/MainNavigation.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
// import FooterLinks from '~/components/FooterLinks.vue'
import DarkModeToggle from '~/components/DarkModeToggle.vue'

export default defineComponent({
  components: {
    MainNavigation,
    MobileNavigation,
    // FooterLinks
    DarkModeToggle
  },
  setup() {
    const darkModeStore = useDarkModeStore()

    onMounted(() => {
      darkModeStore.initDarkMode()
    })

    const darkMode = computed(() => darkModeStore.dark)

    return {
      darkMode
    }
  }
})
</script>
