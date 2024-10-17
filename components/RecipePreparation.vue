<template>
  <div class="flex flex-col">
    <h3 class="text-primary-foreground text-lg lg:text-xl pb-4">Préparation</h3>
    <div v-html="procedure"
      class="prose-fristouille prose-ol:text-base prose-ol:leading-tight prose-ol:font-normal prose-ol:ligatures-none prose-li:mb-6 prose-p:text-base  prose-p:text-foreground prose-p:font-sans prose-ol:text-foreground prose-ul:text-foreground prose-li:text-foreground prose-a:text-accent prose-a:hover:text-foreground prose-a:focus:text-foreground" />
    <div v-if="source" class="mt-6 underline">
      <a v-if="source.startsWith('http')" :href="source" target="_blank"
        class="text-sm font-mono font-medium text-accent hover:cursor-pointer hover:underline focus:text-foreground ">
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
