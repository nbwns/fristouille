<template>
  <div id="app" :class="{ 'dark': darkMode }" class="w-full flex flex-col min-h-screen bg-background">
    <header class="print:hidden">
      <MainNavigation />
    </header>
    <div class="flex-grow bg-background">
      <Nuxt />
    </div>
    <footer-links class="print:hidden" />
    <mobile-navigation class="print:hidden" />
  </div>
</template>

<style></style>

<script>
import { defineComponent, onMounted, computed } from '@nuxtjs/composition-api'
import { useDarkModeStore } from '~/store/darkMode'
import MainNavigation from '~/components/MainNavigation.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
import FooterLinks from '~/components/FooterLinks.vue'

export default defineComponent({
  components: {
    MainNavigation,
    MobileNavigation,
    FooterLinks
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
