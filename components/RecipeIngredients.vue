<template>
  <div class="flex flex-col space-y-2">
    <h3 class="text-primary-foreground text-xl lg:text-2xl">Ingrédients</h3>
    <ServingsAdjuster v-model="localServings" />
    <IngredientList :ingredients="ingredients" :servingsRatio="servingsRatio" />
  </div>
</template>

<script>
import ServingsAdjuster from './ServingsAdjuster.vue';
import IngredientList from './IngredientList.vue';

export default {
  components: {
    ServingsAdjuster,
    IngredientList,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    initialServings: {
      type: Number,
      required: true,
    },
    recipeYield: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      localServings: this.initialServings,
    };
  },
  computed: {
    servingsRatio() {
      return this.localServings / this.recipeYield;
    },
  },
  watch: {
    localServings(newValue) {
      this.$emit('update:servings', newValue);
    },
  },
};
</script>
