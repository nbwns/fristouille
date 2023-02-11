<template>
  <div class="flex flex-col min-h-screen  bg-reglisse-200">
    <header>
		<MainNavigation/>
    </header>
    <div class="flex-grow">
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
