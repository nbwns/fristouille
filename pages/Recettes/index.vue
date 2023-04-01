<template>
	<div class="grid place-items-center">
		<!-- advanced search for desktop and mobile, displays selected filters as tags (extract this part ?) -->
					<advanced-search 
							@filtersChanged="setFilterQuery" 
							@closePopup="mobileAdvancedSearch=false"
							@triggerSearch="mobileAdvancedSearch=false, updateQuery()"
							:popupMobile="mobileAdvancedSearch" 
						/>
	  <div class="layer__xl">
			<!-- TODO: add loading indicator -->
			<!-- TODO: open mobile popup based on query string param -->
			
			<!-- link to advanced search (mobile only) -->
			<span class="md:hidden font-labil text-base font-medium text-coral-300 cursor-pointer" @click="mobileAdvancedSearch=true">
				+ de filtres
			</span>
			



			<div class="flex flex-col md:flex-row gap-4">
				<!-- search input -->
				<input type="search" class="input-search text-usual"
				:value="query"
				placeholder="Que souhaitez-vous cuisiner ?"
				ref="searchField"
				@keyup.enter="updateQuery"/>
				<div class="flex flex-row">
					<!-- search button -->
					<button @click="updateQuery" class="btn w-max" aria-label="Rechercher">
						je recherche
											<!-- search icon -->
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
					</button>

				</div>
			</div>
			<selected-filters/>
			<!-- warning -->
			<div v-if="noSearchParameters">
				Veuillez indiquer au minimum un terme de recherche ou un filtre avancé
			</div>
				
						<ais-instant-search :index-name="indexName" :search-client="searchClient" :search-function="search" >		
							<ais-configure
								:hits-per-page.camel="12"
								:distinct="true"
								:filters="filterQuery"
								:query="query"
								:page="page"
							/>
				
							<!-- check if that works... -->
							<ais-state-results>
								<template v-slot="{ status }">
								<p v-show="status === 'stalled'">
									Loading search results
								</p>
								</template>
							</ais-state-results>
				
							<div v-if="searchPerformed">
								<normal-title v-if="query">
									Résultats pour '{{ query }}'
								</normal-title>
								<normal-title v-else>
									Découvrez nos recettes
								</normal-title>
							</div>
							<div v-else>
								<!-- here we can show suggestions on the default state of the page -->
								Pas d'idées ? Essayez avec ces mots clés: "végétarien"
							</div>
				
							<ais-pagination >
								<template
									v-slot="{
									nbHits
									}"
								>
									<!-- number of results (hidden on mobile) -->
									<div class="hidden md:flex">
										{{ nbHits }} recettes
									</div>
								</template>
							</ais-pagination>
				
							<ais-hits>
								<template v-slot="{ items }">
								<grid-of-cards-recipes :recipes="items" v-if="items.length > 0"/>  
								<div v-else>
									<!-- no results -->
									Pas de résultat pour cette recherche :(
								</div>
								</template>
							</ais-hits>
							<ais-pagination>
								<template
									v-slot="{
									currentRefinement,
									nbPages,
									pages,
									isFirstPage,
									isLastPage,
									refine,
									createURL
									}"
								>
									<div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
										<ul class="isolate inline-flex -space-x-px rounded-md shadow-sm">
											<li v-if="!isFirstPage">
												<a 
													class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"							
													:href="createURL(0)" 
													@click.prevent="refine(0)"
												>
													<span class="sr-only">Premier</span>
													<!-- Heroicon name: mini/chevron-left -->
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
													</svg>
												</a>
											</li>
											<li v-if="!isFirstPage">
												<a
													class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
													:href="createURL(currentRefinement - 1)"
													@click.prevent="refine(currentRefinement - 1)"
												>
												<span class="sr-only">Précédent</span>
												<!-- Heroicon name: mini/chevron-left -->
												<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
												</svg>
												</a>
											</li>
											<li v-for="page in pages" :key="page">
												<a
												class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
												:href="createURL(page)"
												:class="[page === currentRefinement ? 'font-bold' : '']"
												@click.prevent="refine(page)"
												>
												{{ page + 1 }}
												</a>
											</li>
											<li v-if="!isLastPage">
												<a
													class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
													:href="createURL(currentRefinement + 1)"
													@click.prevent="refine(currentRefinement + 1)"
												>
													<span class="sr-only">Next</span>
													<!-- Heroicon name: mini/chevron-right -->
													<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
													</svg>
												</a>
											</li>
											<li v-if="!isLastPage">
												<a 
													class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
													:href="createURL(nbPages)" 
													@click.prevent="refine(nbPages)"
												>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
													</svg>
												</a>
											</li>
										</ul>
									</div>
								</template>
							</ais-pagination>
						</ais-instant-search>
		</div>
	  
	</div>
  </template>
  
  <script>
import {
	AisInstantSearch,
	AisHits,
	AisPagination,
} from 'vue-instantsearch'; 
import algoliaSearch from 'algoliasearch/lite'
import CardRecipe from '~/components/CardRecipe.vue';
import AdvancedSearch from '~/components/AdvancedSearch.vue'
import NormalTitle from '~/molecules/Title.vue';
import SelectedFilters from '~/components/SelectedFilters.vue';
import GridOfCardsRecipes from '~/components/GridOfCardsRecipes.vue';

import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
const indexName = 'Recipes';
export default {
	components: {
		CardRecipe,
		AdvancedSearch,
		AisInstantSearch,
		AisHits,
		AisPagination,
		NormalTitle,
		SelectedFilters,
		GridOfCardsRecipes
	},
	data(){
		return{
			indexName,
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
			page: 0,
			noSearchParameters: false,
			mobileAdvancedSearch: false,
			searchPerformed: false
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
			console.log("INIT SEARCH")
			this.setFilterQuery();
			console.log("search query", helper.state.query);
			console.log("filter query", this.filterQuery);
			if (helper.state.query || (!helper.state.query && this.filterQuery != '')) {
				//trigger search - without reloading the page
				console.log("trigger search");
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
		updateQuery(){
			this.query = this.$refs.searchField.value;
			this.setFilterQuery();
			this.searchPerformed = true;
			if (!this.query && !this.filterQuery) {
				this.noSearchParameters = true;
			}
			else{
				this.noSearchParameters = false;
			}
		},
		setFilterQuery(){
			//take searchFilters from the store, build the Algolia filter query and triggers search
			//filterQuery is the value of the 'filters' property of Algolia
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
			console.log("filterQuery",filterQuery);
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
		this.query = this.$route.query.q || "";
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
		if(this.filterQuery || this.query){
			this.searchPerformed = true;
		}
	}
}
  </script>