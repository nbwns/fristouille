<template>
  <div class="flex flex-row flex-wrap justify-start items-start gap-2 noprint">
    <nuxt-link v-for="t in recipe.tagsList" :key="t" :to="`/Recettes?q=${t}`" class="noprint">
      <tag look="light">{{ t }}</tag>
    </nuxt-link>

    <nuxt-link v-if="recipe.baseRecipe" key="baseRecipe" :to="`/Recettes?baseRecipe=${recipe.baseRecipe}`">
      <tag look="light" class="lowercase">{{ recipe.baseRecipe.replaceAll('-', ' ') }}</tag>
    </nuxt-link>

    <nuxt-link v-for="cat in recipe.category" :key="cat" :to="`/Recettes?category=${cat}`">
      <tag look="light" class="lowercase">{{ cat }}</tag>
    </nuxt-link>

    <nuxt-link v-if="recipe.cuisine" key="cuisine" :to="`/Recettes?cuisine=${recipe.cuisine}`">
      <tag look="light" class="lowercase">{{ recipe.cuisine }}</tag>
    </nuxt-link>

    <nuxt-link v-for="free in recipe.free" :key="free" :to="`/Recettes?free=${free}`">
      <tag look="light" class="lowercase">sans {{ free }}</tag>
    </nuxt-link>
  </div>
</template>

<script>
import Tag from '~/molecules/Tag.vue';

export default {
  components: { Tag },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>
