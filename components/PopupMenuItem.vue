<template>
  <li class="flex items-center pb-3 !text-white-300 dark:!text-black-300">
    <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
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