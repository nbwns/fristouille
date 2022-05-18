<template>
  <div class="">
	<input type="search" class="border-2" v-model="queryInput"/> <button @click="query = queryInput">🔍</button>
    <ais-instant-search :index-name="indexName" :search-client="searchClient" :search-function="search" >		
		<ais-configure
			:hits-per-page.camel="10"
			:distinct="true"
			:filters="filterQuery"
			:query="query"
			:page="page"
		/>
		
		<ais-hits>
			<template v-slot="{ items }">
				<RecipeCard v-for="item in items" :key="item.objectID" :searchResult="item" />
			</template>
		</ais-hits>
		<ais-pagination />
    </ais-instant-search>
	<advanced-search @filtersChanged="setFilterQuery" :urlFilters="searchFiltersFromUrl"/>
  </div>
</template>

<script>
import algoliaSearch from 'algoliasearch/lite'
import RecipeCard from '~/components/RecipeCard.vue'
import AdvancedSearch from '~/components/AdvancedSearch.vue'
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';

const indexName = 'Recipes';

export default {
	components: {
		RecipeCard,
		AdvancedSearch
	},
	data(){
        return{
            indexName,
			queryInput: '',
			query: '',
			searchClient: algoliaSearch(this.$config.algoliaAppId,this.$config.algoliaApiKey),
			// routing: {
			// 	router: historyRouter(),
        	// 	stateMapping: {
			// 		stateToRoute(uiState) {
			// 			const indexUiState = uiState[indexName];
			// 			console.log("uiState",indexUiState);
			// 			// return {
			// 			// 	q: indexUiState.query,
			// 			// 	page: indexUiState.page,
			// 			// 	diet: indexUiState.refinementList &&
			// 			// 		indexUiState.refinementList.diet,
			// 			// };
			// 		},
			// 		routeToState(routeState) {
			// 			console.log("routeState",routeState);
			// 			//todo: set query textbox
			// 			// return {
			// 			// 	[indexName]: {
			// 			// 		query: routeState.q,
			// 			// 		page: routeState.page,
			// 			// 		refinementList: {
			// 			// 			diet: routeState.diet,
			// 			// 		},
			// 			// 		/*configuration:{
			// 			// 			filters: routeState.filters
			// 			// 		}*/
			// 			// 	},
			// 			// };
			// 		}
			// 	}
      		// },
			filterQuery:'',
			searchFiltersFromUrl: null,
			page: 0
        }
    },
	computed:{
		searchFilters(){
			return this.$store.state.searchFilters;
		}
	},
	methods: {
		search(helper){
			if (helper.state.query || (!helper.state.query && this.filterQuery != '')) {
				helper.search();
				this.$router.push({
					path: this.$route.path, 
					query: { 
						q: helper.state.query, 
						diet: this.searchFilters.diet,
						category: this.searchFilters.category,
						cuisine: this.searchFilters.cuisine,
						free: this.searchFilters.free,
						months: this.searchFilters.months,
						page: helper.state.page
					}
				})
			}
		},
		setFilterQuery(){
			//take searchFilters from the store, build the filter query and set it
			this.filterQuery = this.buildFilterQuery(this.searchFilters);
		},
		buildFilterQuery(filters){
			let filterQuery = '';
		
			for(let cat in filters){
				if(filters[cat].length > 0){
					//if there is already a category filter, concat AND between category filters
					if(filterQuery != ''){
						filterQuery += " AND ";
					}

					//prefix filter value with the category name, for instance "Végétarien" becomes "diet:Végétarien"
					let catFilters = filters[cat].map(v => `${cat}:${v}`);
					//join all filter of the same category with OR
					filterQuery += `(${catFilters.join(' OR ')})`;
				}
					
			}
			console.log(filterQuery);
			return filterQuery;
		},
		sanitizeQueryParameter(param){
			if(this.$route.query[param]){
				return Array.isArray(this.$route.query[param]) ? this.$route.query[param] : [this.$route.query[param]]
			}

			return [];
		}
	},
	mounted(){
		console.log("QS",this.$route.query);
		
		this.query = this.$route.query.q;
		this.page = this.$route.query.page || 0;
		this.queryInput = this.query;

		this.searchFiltersFromUrl = {
			diet: this.sanitizeQueryParameter("diet"),
			category: this.sanitizeQueryParameter("category"),
			free: this.sanitizeQueryParameter("free"),
			cuisine: this.sanitizeQueryParameter("cuisine"),
			months: this.sanitizeQueryParameter("months"),
		};
		this.$store.commit('saveSearchFilters', this.searchFiltersFromUrl);
		this.filterQuery = this.buildFilterQuery(this.searchFiltersFromUrl);
	}
}
</script>
