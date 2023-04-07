import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//import VuexPersistence from 'vuex-persist'

export const state = () => ({
	searchFilters: {
		diet: [],
		category:[],
		free: [],
		cuisine: [],
		months:[]
	}
});

export const mutations = {
	saveSearchFilters(state, value){
		state.searchFilters = value;
	},
	addToFilters(state, filter){
		if(!state.searchFilters[filter.type].includes(filter.value)){
			state.searchFilters[filter.type].push(filter.value);
		}
	},
	removeFromFilters(state, filter){
		const index = state.searchFilters[filter.type].indexOf(filter.value);
		if (index > -1) {
			state.searchFilters[filter.type].splice(index, 1); 
		}
	}
}