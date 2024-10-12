<template>
  <div>
    <h3 class="noprint">Tags</h3>
    <div class="flex flex-row flex-wrap justify-start items-start gap-2 noprint">
      <!-- tags -->
      <nuxt-link v-for="t in tagsList" :key="t" :to="`/Recettes?q=${t}`" class="noprint">
        <tag look="light">{{ t }}</tag>
      </nuxt-link>

      <!-- base recipe -->
      <nuxt-link v-if="baseRecipe" key="baseRecipe" :to="`/Recettes?baseRecipe=${baseRecipe}`">
        <tag look="light" class="lowercase">{{ baseRecipe.replaceAll('-', ' ') }}</tag>
      </nuxt-link>

      <!-- category -->
      <nuxt-link v-for="cat in category" :key="cat" :to="`/Recettes?category=${cat}`">
        <tag look="light" class="lowercase">{{ cat }}</tag>
      </nuxt-link>

      <!-- cuisine -->
      <nuxt-link v-if="cuisine" key="cuisine" :to="`/Recettes?cuisine=${cuisine}`">
        <tag look="light" class="lowercase">{{ cuisine }}</tag>
      </nuxt-link>

      <!-- allergies -->
      <nuxt-link v-for="free in freeFrom" :key="free" :to="`/Recettes?free=${free}`">
        <tag look="light" class="lowercase">sans {{ free }}</tag>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Tag from '~/molecules/Tag.vue';

export default {
  components: { Tag },
  props: {
    tagsList: {
      type: Array,
      default: () => [],
    },
    baseRecipe: {
      type: String,
      default: null,
    },
    category: {
      type: Array,
      default: () => [],
    },
    cuisine: {
      type: String,
      default: null,
    },
    freeFrom: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
