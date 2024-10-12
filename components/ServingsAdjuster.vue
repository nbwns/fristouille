<template>
  <div>
    <p class="text-usual">Nombre de personnes</p>
    <div
      class="flex flex-row items-center gap-2 bg-black-300 dark:bg-purple-100 w-fit border-black-200 dark:border-purple-200">
      <button
        class="title-article border-r-2 border-r-black-200 dark:border-r-purple-200 dark:hover:border-r-purple-200 text-center px-4 dark:hover:bg-purple-200 noprint"
        @click="decreaseServings" :disabled="servings === 1">
        -
      </button>
      <input
        class="max-w-[40px] bg-black-300 dark:bg-purple-100 rounded focus:outline-none focus:ring focus:ring-black-200 block p-2.5 placeholder:text-white-200 text-white-100 title-paragraph text-center"
        type="number" v-model.number="servings" step="1" min="1" max="30" @input="updateServings" />
      <button
        class="title-article border-l-2 border-l-black-200 dark:border-l-purple-200 dark:hover:border-l-purple-200 dark:hover:bg-purple-200 text-center px-4 noprint"
        @click="increaseServings">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServingsAdjuster',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      servings: this.value
    }
  },
  methods: {
    decreaseServings() {
      if (this.servings > 1) {
        this.servings--
        this.$emit('input', this.servings)
      }
    },
    increaseServings() {
      if (this.servings < 30) {
        this.servings++
        this.$emit('input', this.servings)
      }
    },
    updateServings() {
      this.$emit('input', this.servings)
    }
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>