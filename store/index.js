import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
  dark: false,
  launchSearchFromBar: false,
});

export const mutations = {
  saveSearchQuery(state, value) {
    state.searchQuery = value;
  },
  saveSearchFilters(state, value) {
    //to make sure that's a deep copy
    state.searchFilters = JSON.parse(JSON.stringify(value));
  },
  addToFilters(state, filter) {
    if (!state.searchFilters[filter.type].includes(filter.value)) {
      state.searchFilters[filter.type].push(filter.value);
    }
  },
  removeFromFilters(state, filter) {
    const index = state.searchFilters[filter.type].indexOf(filter.value);
    if (index > -1) {
      state.searchFilters[filter.type].splice(index, 1);
    }
  },
  toggleDarkMode(state, value) {
    state.dark = value;
  },
  toggleSearchFromBar(state, value) {
    state.launchSearchFromBar = value;
  },
};

// Remove the plugins from here
// export const plugins = [
//   createPersistedState({
//     paths: ["dark"],
//   }),
// ];
