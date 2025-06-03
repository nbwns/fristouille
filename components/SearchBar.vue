<template>
	<div class="relative inline-flex h-10 border border-primary-foreground/10 shadow w-full rounded overflow-hidden">
		<label for="search-query-input" class="sr-only text-primary-foreground">{{ placeholder }}</label>
		<input type="text" name="q" id="search-query-input"
			class="placeholder:font-mono font-medium flex items-center w-full h-full px-3 py-0 bg-secondary border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground placeholder:text-sm placeholder:tracking-tight placeholder:ligatures-none"
			:placeholder="placeholder" :required="required" v-model="inputValue" @keyup.enter="keyEnter" />
			<button
				type="submit"
				class="plausible-event-name=Search+Click bg-orange-300 dark:bg-purple-300 hover:bg-orange-600 text-white rounded-full p-2 flex items-center justify-center select-none"
				@click="clickButton"
			>
			<svg class="w-5 h-5 stroke-white-100" aria-hidden="true" fill="none"
				viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
			</svg>
			</button>
	</div>
</template>

<script>
import { useSearchStore } from '~/store/search'

export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
		const searchStore = useSearchStore()

		return {
			searchStore
		}
	},
  computed: {
    inputValue: {
      get() {
        return this.searchStore.searchQuery;
      },
      set(value) {
        this.searchStore.saveSearchQuery(value);
      },
    },
  },
  methods: {
    updateSearchQuery() {
      this.searchStore.saveSearchQuery(this.inputValue);
      this.searchStore.toggleSearchFromBar(true);
    },
    clickButton(){
      console.log("test")
      this.$emit('enter')
    },
    keyEnter(event){
      event.target.blur();
      this.$emit('enter')
    }
  },
};


</script>

<style></style>
