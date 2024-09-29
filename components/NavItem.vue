<template>
  <div class="flex flex-col items-center gap-3">
    <nuxt-link class="navmobile flex flex-col items-center" :to="to" no-prefetch exact>
      <component :is="iconComponent" class="h-8 mx-auto" />
      <span class="text-sm font-medium font-inter">
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
  }
}
</script>

<style scoped>
.navmobile {
  @apply text-white-100 dark:text-black-100 hover:text-white-300 dark:hover:text-black-300 transition-colors duration-200;
}

.navmobile.nuxt-link-exact-active {
  @apply text-orange-300;
}

.navmobile.nuxt-link-exact-active :deep(svg) {
  @apply fill-orange-300;
}
</style>