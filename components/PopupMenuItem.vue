<template>
  <li class="flex items-center pb-3 !text-white-300 dark:!text-black-300">
    <component :is="linkComponent" v-bind="linkProps">{{ label }}</component>
  </li>
</template>

<script>
export default {
  props: ['to', 'href', 'target', 'label'],
  computed: {
    linkComponent() {
      return this.to ? 'nuxt-link' : 'a'
    },
    linkProps() {
      return this.to ? { to: this.to } : { href: this.href, target: this.target }
    }
  }
}
</script>