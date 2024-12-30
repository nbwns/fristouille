<template>
  <div>
    <h3 class="text-primary-foreground text-lg lg:text-xl pb-4 noprint lowercase">Tags</h3>
    <div class="flex flex-row flex-wrap justify-start items-start gap-2 noprint">
      <!-- tags -->
      <tag v-for="t in tagsList" :key="t" :to="`/Recettes?q=${t}`" class="noprint">
		{{ t }}
	  </tag>

      <!-- base recipe -->
      <tag v-if="baseRecipe" key="baseRecipe" :to="`/Recettes?baseRecipe=${baseRecipe}`">
		{{ baseRecipe.replaceAll('-', ' ') }}
	  </tag>

      <!-- category -->
      <tag v-for="cat in category" :key="cat" :to="`/Recettes?category=${cat}`">
		{{ cat }}
	  </tag>

      <!-- cuisine -->
      <tag v-if="cuisine" key="cuisine" :to="`/Recettes?cuisine=${cuisine}`">
		{{ cuisine }}
      </tag>

      <!-- allergies -->
      <tag v-for="free in freeFrom" :key="free" :to="`/Recettes?free=${free}`">
		sans {{ free }}
      </tag>
    </div>
  </div>
</template>

<script>
import Tag from '~/molecules/LinkTag.vue';

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
