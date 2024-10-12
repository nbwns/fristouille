<template>
  <div class="flex flex-col">
    <h3>Préparation</h3>
    <div v-html="procedure" class="prose md:prose-lg" />
    <div v-if="source">
      <a v-if="source.startsWith('http')" :href="source" target="_blank"
        class="text-base font-inter text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
        Vers la publication originale
      </a>
      <span v-else><em class="text-base">{{ source }}</em></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    procedure: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      default: null,
    },
  },
};
</script>
