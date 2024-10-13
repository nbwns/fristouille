<template>
	<section class="flex flex-col justify-start items-start layer__xl mx-auto d-1">
		<!-- search bar (mobile only) -->
		<div class="flex md:hidden w-full py-4 space-x-6">
			<search-bar placeholder="Rechercher des recettes" @enter="updateQuery()"></search-bar>

			<div class="flex min-w-[1/5] group d-2">
				<span
					class="md:hidden font-mono text-sm text-primary-foreground group-hover:text-accent transition-colors duration-300 cursor-pointer"
					@click="mobileAdvancedSearch = !mobileAdvancedSearch">
					filtres
					<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="lucide lucide-list-plus text-primary-foreground group-hover:text-accent transition-colors duration-300">
						<path d="M11 12H3" />
						<path d="M16 6H3" />
						<path d="M16 18H3" />
						<path d="M18 9v6" />
						<path d="M21 12h-6" />
					</svg>
				</span>
			</div>



		</div>
		<!-- link to advanced search (mobile only) -->

		<!-- TODO: add loading indicator -->
		<!-- TODO: open mobile popup based on query string param -->
		<div class="flex flex-col md:flex-col-reverse gap-4 w-full">
			<!-- advanced search for desktop and mobile, displays selected filters as tags (extract this part ?) -->
			<advanced-search @filtersChanged="updateQuery" :showDrawer="mobileAdvancedSearch"
				@closeDrawer="mobileAdvancedSearch = false" />
		</div>

		<!-- warning -->
		<div v-if="noSearchParameters" class="w-full text-center text-usual text-white-300/75 py-10">
			Veuillez indiquer au minimum un terme de recherche ou un filtre avancé
		</div>

		<ais-instant-search :index-name="indexName" :search-client="searchClient" :search-function="search" class="w-full">
			<ais-configure :hits-per-page.camel="12" :distinct="true" :filters="filterQuery" :query="query"
				:optional-words.camel="query" :page="page" />

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
				<div class=" font-labil font-light p-14 text-black-50  text-xl text-center ">
					<!-- here we can show suggestions on the default state of the page -->
					Pas d'idées ? <br /> Essayez avec ces mots clés: "lentilles", "facile"
				</div>
			</div>

			<div v-if="searchPerformed">
				<ais-pagination>
					<template v-slot="{
						nbHits
					}">

						<!-- number of results (hidden on mobile) -->
						<div class="hidden md:flex text-usual pt-4 pb-2">
							{{ nbHits }} recettes
						</div>
					</template>
				</ais-pagination>

				<ais-hits>
					<template v-slot="{ items }">
						<grid-of-cards-recipes :recipes="items" v-if="items.length > 0" />
						<div v-else>
							<!-- no results -->
							<div class="text-usual">
								Pas de résultat pour cette recherche
							</div>
						</div>
					</template>
				</ais-hits>

				<ais-pagination @page-change="pageChange">
					<template v-slot="{
						currentRefinement,
						pages,
						isFirstPage,
						isLastPage,
						refine,
						createURL
					}">
						<div class="w-full py-10">
							<ul class="pagination">
								<li v-if="!isFirstPage">
									<a :href="createURL(currentRefinement - 1)" @click.prevent="refine(currentRefinement - 1)">
										<span class="sr-only">Précédent</span>
										<!-- Heroicon name: mini/chevron-left -->
										<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14 7L9 12L14 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>

									</a>
								</li>
								<li v-for="page in pages" :key="page">
									<a :href="createURL(page)" :class="[page === currentRefinement ? 'text-pink-200' : '']"
										@click.prevent="refine(page)">
										{{ page + 1 }}
									</a>
								</li>
								<li v-if="!isLastPage">
									<a :href="createURL(currentRefinement + 1)" @click.prevent="refine(currentRefinement + 1)">
										<span class="sr-only">Next</span>
										<!-- Heroicon name: mini/chevron-right -->
										<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</template>
				</ais-pagination>
			</div>
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
import GridOfCardsRecipes from '~/components/GridOfCardsRecipes.vue';
import SearchBar from '~/components/SearchBar.vue'

const indexName = 'Recipes';

export default {
	components: {
		CardRecipe,
		AdvancedSearch,
		AisInstantSearch,
		AisHits,
		AisPagination,
		NormalTitle,
		GridOfCardsRecipes,
		SearchBar
	},
	data() {
		return {
			indexName,
			query: '',
			searchClient: algoliaSearch(this.$config.algoliaAppId, this.$config.algoliaApiKey),
			filterQuery: '',
			searchFiltersFromUrl: null,
			page: 0,
			noSearchParameters: false,
			mobileAdvancedSearch: false,
			searchPerformed: false,
			filtersHaveChanged: false,
			historyChanged: false
		}
	},
	computed: {
		//get filters from the store
		searchFilters() {
			return this.$store.state.searchFilters;
		},
		searchQuery() {
			return this.$store.state.searchQuery;
		},
		toggleSearchFromBar() {
			return this.$store.state.launchSearchFromBar;
		}
	},
	methods: {
		//triggered on button click
		search(helper) {
			this.setFilterQuery();
			if (helper.state.query || (!helper.state.query && this.filterQuery != '')) {
				//trigger search - without reloading the page
				helper.search();
				this.searchPerformed = true;
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
			else {
				this.searchPerformed = false;
			}

		},
		updateQuery() {
			this.query = this.searchQuery;
			this.setFilterQuery();
			this.searchPerformed = true;
			this.filtersHaveChanged = false;
			this.mobileAdvancedSearch = false;
			if (!this.query && !this.filterQuery) {
				this.noSearchParameters = true;
			}
			else {
				this.noSearchParameters = false;
			}
		},
		setFilterQuery() {
			//take searchFilters from the store, build the Algolia filter query and triggers search
			//filterQuery is the value of the 'filters' property of Algolia
			this.filterQuery = this.buildFilterQuery(this.searchFilters);
		},
		buildFilterQuery(filters) {
			let filterQuery = '';

			for (let cat in filters) {
				if (filters[cat].length > 0) {
					//if there is already a category filter, concat AND between category filters
					if (filterQuery != '') {
						filterQuery += " AND ";
					}
					//prefix filter value with the category name, for instance "Végétarien" becomes "diet:Végétarien"
					let catFilters = filters[cat].map(v => `${cat}:'${v}'`);
					//join all filter of the same category with OR
					filterQuery += `(${catFilters.join(' OR ')})`;
				}

			}
			console.log("filterQuery", filterQuery);
			return filterQuery;
		},
		capitalizeWords(arr) {
			return arr.map((word) => {
				const capitalizedFirst = word.charAt(0).toUpperCase();
				const rest = word.slice(1).toLowerCase();
				return capitalizedFirst + rest;
			});
		},
		sanitizeQueryParameter(route, param) {
			if (route.query[param]) {
				return this.capitalizeWords(Array.isArray(route.query[param]) ? route.query[param] : [route.query[param]]);
			}
			return [];
		},
		triggerSearchOnPageLoad() {
			console.log("----trigger search on page load----");
			//hydrate objects from the query string		

			//the query used by Algolia, triggers search if non-empty
			this.query = this.$route.query.q || "";
			this.page = this.$route.query.page || 0;
			this.queryInput = this.query;
			this.searchFiltersFromUrl = {
				diet: this.sanitizeQueryParameter(this.$route, "diet"),
				category: this.sanitizeQueryParameter(this.$route, "category"),
				free: this.sanitizeQueryParameter(this.$route, "free"),
				cuisine: this.sanitizeQueryParameter(this.$route, "cuisine"),
				months: this.sanitizeQueryParameter(this.$route, "months"),
				baseRecipe: this.sanitizeQueryParameter(this.$route, "baseRecipe"),
			};

			//save search filters and query into the store
			this.$store.commit('saveSearchFilters', this.searchFiltersFromUrl);
			this.$store.commit('saveSearchQuery', this.query);

			//take searchFilters from the URL, build the Algolia filter query and triggers search if non-empty
			this.filterQuery = this.buildFilterQuery(this.searchFiltersFromUrl);
			if (this.filterQuery || this.query) {
				this.searchPerformed = true;
				this.historyChanged = true;
			}
		},
		pageChange() {
			document.body.scrollIntoView();
		}
	},
	watch: {
		toggleSearchFromBar(newValue, oldValue) {
			this.updateQuery();
		}
	},
	mounted() {
		this.triggerSearchOnPageLoad();
	}
}
</script>