<template>
	<section class="flex flex-col justify-start items-start layer__xl mx-auto">
		<!-- link to advanced search (mobile only) -->
		<div class="pb-1 pt-5">
			<span class="md:hidden font-labil text-base font-medium text-orange-300 cursor-pointer"  	@click="mobileAdvancedSearch=!mobileAdvancedSearch">
				{{ mobileAdvancedSearch ? '- de filtres' : '+ de filtres' }}
			</span>
		</div>
			<!-- TODO: add loading indicator -->
			<!-- TODO: open mobile popup based on query string param -->				
			<div class="flex flex-col md:flex-col-reverse gap-4 w-full">
				<!-- search input -->
				<input type="search" class="input-search text-usual"
				:value="query"
				placeholder="Que souhaitez-vous cuisiner ?"
				ref="searchField"
				@keyup.enter="updateQuery"/>

			<!-- advanced search for desktop and mobile, displays selected filters as tags (extract this part ?) -->
			<advanced-search 
						@filtersChanged="setFilterQuery" 
						@closePopup="mobileAdvancedSearch=false"
						@triggerSearch="mobileAdvancedSearch=false, updateQuery()"
						:popupMobile="mobileAdvancedSearch" 
					/>
			</div>
			<selected-filters/>
			<div class="flex flex-row my-7">
					<!-- search button -->
					<button @click="updateQuery" class="btn w-max" aria-label="Rechercher">
						je recherche
					</button>

				</div>


		<!-- warning -->
		<div v-if="noSearchParameters">
			Veuillez indiquer au minimum un terme de recherche ou un filtre avancé
		</div>
			
						<ais-instant-search 
							:index-name="indexName" 
							:search-client="searchClient" 
							:search-function="search" 
							class="w-full">		
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
			
						<div v-if="searchPerformed" class="pt-10"> 
							<normal-title v-if="query">
								Résultats pour '{{ query }}'
							</normal-title>
							<normal-title v-else>
								Découvrez nos recettes
							</normal-title>
						</div>
						<div class="w-full h-96 flex items-center justify-center" v-else>
							<div class=" font-labil font-light p-14 text-black-50  text-xl text-center " >
								<!-- here we can show suggestions on the default state of the page -->
								Pas d'idées ? <br /> Essayez avec ces mots clés: "végétarien"
							</div>
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
								<div class="w-full py-10">
									<ul class="pagination">
										<li v-if="!isFirstPage">
											<a
												:href="createURL(currentRefinement - 1)"
												@click.prevent="refine(currentRefinement - 1)"
											>
											<span class="sr-only">Précédent</span>
											<!-- Heroicon name: mini/chevron-left -->
											<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14 7L9 12L14 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>

											</a>
										</li>
										<li v-for="page in pages" :key="page">
											<a
											:href="createURL(page)"
											:class="[page === currentRefinement ? 'text-pink-200' : '']"
											@click.prevent="refine(page)"
											>
											{{ page + 1 }}
											</a>
										</li>
										<li v-if="!isLastPage">
											<a
												:href="createURL(currentRefinement + 1)"
												@click.prevent="refine(currentRefinement + 1)"
											>
												<span class="sr-only">Next</span>
												<!-- Heroicon name: mini/chevron-right -->
												<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</template>
						</ais-pagination>
					</ais-instant-search>
				</section>
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
import NormalTitle from '~/molecules/TitleParagraph.vue';
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
						baseRecipe: this.searchFilters.baseRecipe,
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
			baseRecipe: this.sanitizeQueryParameter("baseRecipe"),
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