<template>
  <div class="flex flex-col">
    <h3 class="text-primary-foreground text-xl lg:text-2xl pb-12">Préparation</h3>
    <div v-html="procedure"
      class="prose-fristouille prose-ol:text-lg prose-ol:leading-normal prose-ol:font-normal prose-ol:ligatures-none prose-li:mb-8 prose-p:text-base  prose-p:text-foreground prose-ol:text-foreground prose-ul:text-foreground prose-li:text-foreground prose-a:text-accent prose-a:hover:text-foreground prose-a:focus:text-foreground" />
    <div v-if="source">
      <a v-if="source.startsWith('http')" :href="source" target="_blank"
        class="text-base font-mono text-accent hover:cursor-pointer hover:underline focus:text-foreground">
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
