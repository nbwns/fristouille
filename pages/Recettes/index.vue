<template>
  <div class="">
	<input type="search" class="border-2" v-model="queryInput"/> <button @click="query = queryInput">🔍</button>
	<advanced-search @filtersChanged="setFilterQuery" :urlFilters="searchFiltersFromUrl"/>
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
				<!-- section cards 4 columns -->
				<section class="grid place-items-center py-[10vh] space-y-10 mx-10 md:mx-0">
					<div class="flex flex-col w-full md:w-9/12 lg:w-7/12 space-y-3">
						<!-- grid for cards 4-columns -->
						<div
						class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7  md:gap-x-7 md:gap-y-10 w-full place-items-center">
							<recipe-card v-for="item in items" :key="item.objectID" :searchResult="item" />
						</div>
      				</div>
    			</section>
			</template>
		</ais-hits>
		<ais-pagination />
    </ais-instant-search>
	
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
		//get filters from the store
		searchFilters(){
			return this.$store.state.searchFilters;
		}
	},
	methods: {
		//triggered on button click
		search(helper){
			if (helper.state.query || (!helper.state.query && this.filterQuery != '')) {
				//trigger search - without reloading the page
				helper.search();
				//put search parameters in query string
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
				});
			}
		},
		setFilterQuery(){
			//take searchFilters from the store, build the Algolia filter query and triggers search
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
		//hydrate objects from the query string		
		
		//the query used by Algolia, triggers search if non-empty
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
		
		//save search filters into the store
		this.$store.commit('saveSearchFilters', this.searchFiltersFromUrl);
		
		//take searchFilters from the URL, build the Algolia filter query and triggers search if non-empty
		this.filterQuery = this.buildFilterQuery(this.searchFiltersFromUrl);
	}
}
</script>
