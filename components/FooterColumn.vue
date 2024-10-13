<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.text"
        class="text-alt hover:text-primary-foreground font-mono font-medium text-sm">
        <component :is="link.external ? 'a' : 'nuxt-link'" :to="link.external ? undefined : link.url"
          :href="link.external ? link.url : undefined" :target="link.external ? '_blank' : undefined" class="navlink"
          :exact="!link.external" :no-prefetch="!link.external">
          {{ link.text }}
        </component>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
