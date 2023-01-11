<template>
  <div class="grid min-h-screen  bg-reglisse-100">
    <header>
		<MainNavigation/>
    </header>
    <div class="flex flex-col justify-start min-h-screen">
        <Nuxt />
    </div>
	<footer-links/>
	<mobile-navigation/>
  </div>
</template>

<style>
</style>

<script>
import MainNavigation from '~/components/MainNavigation.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
import FooterLinks from '~/components/FooterLinks.vue'

export default {
	components: {
      MainNavigation,
	  MobileNavigation,
	  FooterLinks
    }
}
</script>
