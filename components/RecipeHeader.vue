<template>
  <div class="flex flex-col space-y-12">
    <div class="flex flex-col space-y-4">
      <h1
        class="font-sans text-primary-foreground text-2xl lg:text-4xl font-medium leading-none lowercase text-balance w-full max-w-4xl">
        {{ name }}</h1>
      <div class="text-primary-foreground text-usual leading-none">
        par <span v-if="authorWeb">
          <a :href="authorWeb" target="_blank"
            class="text-base font-mono font-medium text-label hover:cursor-pointer hover:underline focus:text-accent/75">
            {{ authorName }}
          </a>
        </span>
        <span v-else>
          {{ authorName }}
        </span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between w-full noprint">
      <div class="flex flex-col">
        <h2
          class="text-pretty text-primary-foreground font-light lg:font-normal font-sans text-base lg:text-xl leading-normal ligatures-none">
          " {{ description }} "
        </h2>
      </div>
    </div>
    <div class="w-full">
      <img v-if="picture"
        class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-[16px] noprint" :src="picture"
        :alt="`Photo d'un plat de ${name}`" />
    </div>
  </div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
  components: {
    Spacer,
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
      required: true,
    },
    picture: {
      type: String,
      default: null,
    },
  },
};
</script>
