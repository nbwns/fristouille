import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchQuery: "",
    searchFilters: {
      diet: [],
      category: [],
      free: [],
      cuisine: [],
      months: [],
      baseRecipe: [],
    },
    launchSearchFromBar: false,
  }),
  actions: {
    saveSearchQuery(value) {
      this.searchQuery = value;
    },
    saveSearchFilters(value) {
      this.searchFilters = JSON.parse(JSON.stringify(value));
    },
    toggleSearchFromBar(value) {
      this.launchSearchFromBar = value;
    },
  },
});
