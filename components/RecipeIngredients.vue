<template>
  <div class="flex flex-col">
    <h3 class="text-primary-foreground text-lg lg:text-xl lowercase">Ingrédients</h3>
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
