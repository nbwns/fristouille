<template>
  <div>
    <a v-if="source.startsWith('http')" :href="source" target="_blank"
      class="text-base font-mono font-medium text-accent hover:cursor-pointer hover:underline focus:text-accent">
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
