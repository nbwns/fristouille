<template>
  <header class="flex flex-col space-y-12">
    <div class="recipe-title-section flex flex-col space-y-6">
      <h1
        class="font-sans text-primary-foreground text-xl lg:text-3xl font-medium leading-none lowercase text-balance w-full max-w-4xl">
        {{ name }}
      </h1>
      <div class="text-primary-foreground text-usual leading-none">
        par
        <span v-if="authorWeb">
          <a :href="authorWeb" target="_blank"
            class="inline-flex items-center gap-1 text-base font-mono font-medium text-label hover:cursor-pointer hover:underline focus:text-accent/75">
            {{ authorName }} <external-link-icon class="stroke-purple-100"/>
          </a>
        </span>
        <span v-else>
          {{ authorName }}
        </span>
      </div>
    </div>


    <div v-if="picture" class="w-full">
      <img :src="picture" :alt="`Photo d'un plat de ${name}`"
        class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-[16px] noprint" />
    </div>
    <div v-if="description && description.trim().length > 0"
      class="flex flex-col md:flex-row justify-between w-full noprint">
      <div class="flex flex-col">
        <h2
          class="w-full text-primary-foreground font-light lg:font-light font-sans text-base text-pretty lg:text-lg leading-tight ligatures-none">
          " {{ description }} "
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'


export default {
  name: 'RecipeHeader',
  components: {
	ExternalLinkIcon
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorWeb: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    picture: {
      type: String,
      default: null,
    },
  },
};
</script>
