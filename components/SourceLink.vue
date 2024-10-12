<template>
  <div>
    <a v-if="source.startsWith('http')" :href="source" target="_blank"
      class="text-base font-inter text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
      Vers la publication originale
    </a>
    <span v-else><em class="text-base">{{ source }}</em></span>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true
    }
  }
}
</script>
