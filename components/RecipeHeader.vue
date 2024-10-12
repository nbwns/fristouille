<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-4">
      <h1 class="big-title text-balance w-full lg:max-w-xl">{{ name }}</h1>
      <div class="text-white-300 text-usual leading-none">
        par
        <span v-if="authorWeb">
          <a :href="authorWeb" target="_blank"
            class="text-base font-inter text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
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
        <h2 class="font-labil text-lg font-medium text-balance">{{ description }}</h2>
      </div>
    </div>
    <div class="w-full">
      <img v-if="picture" class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-md noprint"
        :src="picture" :alt="`Photo d'un plat de ${name}`" />
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
