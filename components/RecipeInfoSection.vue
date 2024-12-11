<template>
  <div class="flex flex-col gap-5 lg:gap-8">
    <div class="flex w-full justify-between gap-5 lg:gap-8">
      <RecipeInfoBox label="Préparation" :value="`${preparationTime} min`">
        <template #content>
          <time :datetime="toDuration(preparationTime)">{{ preparationTime }} min</time>
        </template>
      </RecipeInfoBox>
      <RecipeInfoBox label="Cuisson" :value="`${cookTime} min`">
        <template #content>
          <time :datetime="toDuration(cookTime)">{{ cookTime }} min</time>
        </template>
      </RecipeInfoBox>
    </div>

    <div class="flex w-full justify-between gap-5 lg:gap-8">
      <RecipeInfoBox label="Difficulté" :value="difficultyText" />
      <RecipeInfoBox label="Prix" :value="priceText" />
    </div>

    <div class="flex w-full justify-between gap-5 lg:gap-8">
      <RecipeInfoBox label="Saisonnalité" :className="'pb-2'">
        <template #content>
          <div v-if="months.length < 12" class="flex flex-wrap gap-2">
            <tag v-for="month in months" :key="month" :to="`/Recettes?months=${month}`">
              {{ month }}
            </tag>
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
import Tag from '~/molecules/LinkTag.vue';

export default {
  components: {
    RecipeInfoBox,
    Tag
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
    }
  },
  methods:{
	toDuration(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `PT${hours}H${minutes}M`;
	} 
  }
};
</script>
