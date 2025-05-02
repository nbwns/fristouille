<template>
  <div class="flex flex-col items-center gap-3">
    <nuxt-link class="navmobile flex flex-col items-center" :to="to" no-prefetch :exact="exact" :class="{ 'nuxt-link-active': checkIsActive() }">
      <component :is="iconComponent" class="h-8 mx-auto" />
      <span class="text-sm font-medium font-anonymous lowercase">
        {{ label }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import HomeIcon from './icons/HomeIcon.vue'
import RecipeIcon from './icons/RecipeIcon.vue'
import TipsIcon from './icons/TipsIcon.vue'

export default {
  components: {
    HomeIcon,
    RecipeIcon,
    TipsIcon
  },
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    exact: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case 'home':
          return 'HomeIcon'
        case 'recipe':
          return 'RecipeIcon'
        case 'tips':
          return 'TipsIcon'
        default:
          return null
      }
    }
  },
  methods:{
    checkIsActive() {
      // Si nous sommes sur la route exacte
      const currentPath = this.$route.path;
      const to = typeof this.to === 'string' ? this.to : this.to.path;
      
      // Cas spécial pour recettes et recette
      if (to.toLowerCase() === '/recettes' && currentPath.toLowerCase().startsWith('/recette/')) {
        return true;
      }
      
      // Comportement normal de nuxt-link
      if (this.exact) {
        return currentPath === to;
      } else {
        return currentPath.startsWith(to) && to !== '/';
      }
    }
  }
}
</script>

<style scoped>
.navmobile {
  @apply text-white-100 dark:text-black-100 hover:text-white-300 dark:hover:text-black-300 transition-colors duration-200;
}

.navmobile.nuxt-link-active {
  @apply text-orange-300;
}

.navmobile.nuxt-link-active :deep(svg) {
  @apply !fill-orange-300 dark:!fill-purple-300;
}
</style>