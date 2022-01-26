<template>
  <div class="">
    <header>
        Fristouille
		<MainNavigation />
    </header>
    <div>
        <Nuxt />
    </div>
    <footer>
        footer
    </footer>
  </div>
</template>

<style>
</style>

<script>
import MainNavigation from '~/components/MainNavigation.vue'

export default {
	components: {
      MainNavigation
    }
}
</script>
