<template>
  <div class="flex flex-col">
    <h3 class="text-primary-foreground text-lg lg:text-xl pb-4 lowercase">Préparation</h3>
    <div v-html="procedure"
      class="prose-fristouille font-light text-pretty prose-ol:text-base prose-ol:leading-tight prose-ol:font-light prose-ol:ligatures-none prose-ul:text-base prose-ul:leading-tight prose-ul:font-light prose-ul:ligatures-none prose-li:mb-6 prose-p:text-base  prose-p:text-foreground prose-p:font-mono prose-ol:text-foreground prose-ul:text-foreground prose-li:text-foreground prose-a:text-accent prose-a:hover:text-foreground prose-a:focus:text-foreground prose-ol:font-mono prose-ul:font-mono" />
    <div v-if="source" class="mt-6">
      <a v-if="source.startsWith('http')" :href="source" target="_blank"
        class="underline inline-flex items-center gap-1 text-sm font-mono font-medium text-accent hover:cursor-pointer hover:underline focus:text-foreground ">
        Vers la publication originale <external-link-icon/>
      </a>
      <span class="text-primary-foreground font-light lg:font-light font-mono text-base text-pretty leading-tight" v-else>Source : <em>{{ source }}</em></span>
    </div>
  </div>
</template>

<script>
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'

export default {
	components:{
		ExternalLinkIcon
	},
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
