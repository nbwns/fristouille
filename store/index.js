//import VuexPersistence from 'vuex-persist'

export const state = () => ({
	searchFilters: {}
});

export const mutations = {
	saveSearchFilters(state, value){
		state.searchFilters = value;
	}
}