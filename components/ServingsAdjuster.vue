<template>
  <div class="flex flex-col gap-4 pt-4">
    <div
      class="flex flex-row items-center gap-2 bg-secondary w-fit border border-primary-foreground/10 hover:border-primary-foreground/20 rounded-[8px]">
      <button class="font-sans font-medium text-xl lg:text-2xl text-label text-center px-2 noprint"
        @click="decreaseServings" :disabled="servings === 1">
        -
      </button>
      <input
        class="max-w-fit w-20 font-sans font-medium text-xl lg:text-2xl bg-secondary rounded focus:outline-none focus:ring focus:ring-foreground block p-2.5 placeholder:text-foreground text-foreground text-center"
        type="number" v-model.number="servings" step="1" min="1" max="30" @input="updateServings" />
      <button class="font-sans font-medium text-xl lg:text-2xl text-label text-center px-2 noprint"
        @click="increaseServings">
        +
      </button>
    </div>
    <div class="flex gap-2">
      <!-- <svg class="fill-foreground/40 text-foreground/40 w-12 h-12" width="24" height="24" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 13C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14C9 13.7348 9.10536 13.4804 9.29289 13.2929C9.48043 13.1054 9.73478 13 10 13ZM10 4C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5V11C11 11.2652 10.8946 11.5196 10.7071 11.7071C10.5196 11.8946 10.2652 12 10 12C9.73478 12 9.48043 11.8946 9.29289 11.7071C9.10536 11.5196 9 11.2652 9 11V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4Z"
          fill="currentColor" />
      </svg> -->
      <p class="text-foreground/40 font-sans font-normal text-sm lg:text-base text-balance max-w-[140px]">nombre de
        personnes</p>
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
    mounted(){
      console.log("servings", this.servings);
    },
    decreaseServings() {
      console.log("decrease servings");
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
