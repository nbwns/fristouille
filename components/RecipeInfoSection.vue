<template>
  <div class="flex flex-col gap-5">
    <div class="flex w-full justify-between gap-5">
      <RecipeInfoBox label="Préparation" :value="`${preparationTime} min`">
        <template #content>
          <time>{{ preparationTime }} min</time>
        </template>
      </RecipeInfoBox>
      <RecipeInfoBox label="Cuisson" :value="`${cookTime} min`">
        <template #content>
          <time>{{ cookTime }} min</time>
        </template>
      </RecipeInfoBox>
    </div>

    <div class="flex w-full justify-between gap-5">
      <RecipeInfoBox label="Difficulté" :value="difficultyText" />
      <RecipeInfoBox label="Prix" :value="priceText" />
    </div>

    <div class="flex w-full justify-between gap-5">
      <RecipeInfoBox label="Saisonnalité" :className="'pb-2'">
        <template #content>
          <div v-if="months.length < 12" class="flex flex-wrap gap-2">
            <nuxt-link v-for="month in months" :key="month" :to="`/Recettes?months=${month}`">
              <tag class="text-xs" look="light">{{ month }}</tag>
            </nuxt-link>
          </div>
          <div v-else>
            <p>{{ allYearLongLabel }}</p>
          </div>
        </template>
      </RecipeInfoBox>
    </div>
  </div>
</template>

<script>
import RecipeInfoBox from './RecipeInfoBox.vue';
import Tag from '~/molecules/Tag.vue';

export default {
  components: {
    RecipeInfoBox,
    Tag,
  },
  props: {
    preparationTime: {
      type: Number,
      required: true,
    },
    cookTime: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    months: {
      type: Array,
      required: true,
    },
    allYearLongLabel: {
      type: String,
      required: true,
    },
  },
  computed: {
    difficultyText() {
      switch (this.difficulty) {
        case 1:
          return 'Facile';
        case 2:
          return 'Moyenne';
        case 3:
          return 'Difficile';
      }
    },
    priceText() {
      switch (this.price) {
        case '€':
          return 'Bon marché';
        case '€€':
          return 'Abordable';
        case '€€€':
          return 'On se fait plaisir';
      }
    },
  },
};
</script>
