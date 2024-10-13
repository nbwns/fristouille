export const state = () => ({
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
});

export const mutations = {
  saveSearchQuery(state, value) {
    state.searchQuery = value;
  },
  saveSearchFilters(state, value) {
    state.searchFilters = JSON.parse(JSON.stringify(value));
  },
  toggleSearchFromBar(state, value) {
    state.launchSearchFromBar = value;
  },
};

export const actions = {
  // Add any actions if needed
};

export const getters = {
  // Add any getters if needed
};

// Remove any import statements for Vue or Vuex at the top of this file

// Add this to check if the store is initialized correctly
if (process.client) {
  console.log("Vuex store initialized");
}
