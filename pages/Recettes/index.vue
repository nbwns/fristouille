<template>
	<section class="flex flex-col w-full h-full container justify-start items-start mx-auto">
		<!-- search bar (mobile only) -->
		<div class="flex md:hidden w-full py-4 space-x-6">
			<search-bar placeholder="Rechercher des recettes" @enter="updateQuery()"></search-bar>

			<div class="flex min-w-[1/5] group">
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
			<!-- advanced search for desktop and mobile, displays selected filters as tags -->
			<advanced-search @filtersChanged="updateQuery" :showDrawer="mobileAdvancedSearch"
				@closeDrawer="mobileAdvancedSearch = false" />
		</div>

		<!-- Updated warning message -->
		<div v-if="showNoSearchParametersWarning" class="w-full flex flex-row justify-start items-center gap-10">
			<draw-radish class="max-w-[90px] py-8" />
			<div
				class="basis-4/6 text-balance text-primary-foreground font-normal font-sans text-lg leading-tight ligatures-none">
				oups, tu dois indiquer au minimum un terme de recherche
				ou un filtre
				avancé</div>
		</div>

		<ais-instant-search v-if="searchClient" :index-name="indexName" :search-client="searchClient"
			:search-function="search" class="w-full">
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
				<ais-hits>
					<template v-slot="{ items }">
						<template v-if="items.length > 0">
							<normal-title v-if="query">
								Résultats pour '{{ query }}'
							</normal-title>
							<normal-title v-else>
								Découvre nos recettes
							</normal-title>
							<ais-pagination>
								<template v-slot="{
									nbHits
								}">

									<!-- number of results (hidden on mobile) -->
									<div class="hidden md:flex text-sm text-primary-foreground font-light font-mono pt-4 pb-2">
										{{ nbHits }} recettes
									</div>
								</template>
							</ais-pagination>
							<grid-of-cards-recipes :recipes="items" />
						</template>
						<div v-else>
							<!-- no results -->
							<div class="w-full flex flex-row justify-start items-center gap-10">
								<draw-radish class="max-w-[90px] py-8" />
								<div
									class="basis-4/6 text-balance text-primary-foreground font-normal font-sans text-lg leading-tight ligatures-none">
									ouille, il n'y a pas de résultats pour cette recherche</div>
								</div>
							</div>
					</template>
				</ais-hits>
			</div>
			<div class="w-full h-96 flex items-center justify-center " v-else-if="showDefaultMessage">
				<div
					class=" font-sans font-bold p-14 text-alt text-xl lg:text-2xl text-center ligatures-none leading-none bg-secondary rounded-lg shadow-lg  container">
					pas d'idées ?
					<br /> essaie une recherche ou un filtre
					<br />
					<br />
					<div class="flex flex-row gap-2 justify-center items-center">
						<div
							class="inline-flex justify-center items-center h-8 px-4 font-mono font-medium text-base w-fit border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
							<nuxt-link to="/Recettes?q=rapide">
								rapide
							</nuxt-link>
						</div>
						<div
							class="inline-flex justify-center items-center h-8 px-4 font-mono font-medium text-base w-fit border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
							<nuxt-link to="/Recettes?diet=Végétarien">
								végétarien
							</nuxt-link>
						</div>

					</div>
				</div>
			</div>

			<div v-if="searchPerformed">
				<ais-pagination @page-change="pageChange">
					<template v-slot="{
						currentRefinement,
						pages,
						isFirstPage,
						isLastPage,
						refine,
						createURL,
						nbHits
					}">
						<div class="w-full py-10" v-show="nbHits > 0">
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
import { AisInstantSearch, AisHits, AisPagination } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import CardRecipe from '~/components/CardRecipe.vue';
import AdvancedSearch from '~/components/AdvancedSearch.vue'
import NormalTitle from '~/molecules/TitleParagraph.vue';
import GridOfCardsRecipes from '~/components/GridOfCardsRecipes.vue';
import SearchBar from '~/components/SearchBar.vue'
import { useSearchStore } from '~/store/search'
import DrawRadish from '~/molecules/DrawRadish.vue'
import { storeToRefs } from 'pinia'
const indexName = 'Recipes';

export default {
	components: {
		DrawRadish,
		CardRecipe,
		AdvancedSearch,
		AisInstantSearch,
		AisHits,
		AisPagination,
		NormalTitle,
		GridOfCardsRecipes,
		SearchBar
	},
	setup() {
		const searchStore = useSearchStore()
		const { searchFilters, searchQuery, launchSearchFromBar } = storeToRefs(searchStore)

		return {
			searchStore,
			searchFilters,
			searchQuery,
			launchSearchFromBar
		}
	},
	data() {
		return {
			indexName,
			query: '',
			searchClient: null,
			filterQuery: '',
			searchFiltersFromUrl: null,
			page: 0,
			noSearchParameters: false,
			mobileAdvancedSearch: false,
			searchPerformed: false,
			filtersHaveChanged: false,
			historyChanged: false,
			showNoSearchParametersWarning: false,
			showDefaultMessage: true
		}
	},
	computed: {
		hasActiveFilters() {
			return Object.values(this.searchFilters).some(filter => filter.length > 0);
		},
	},
	methods: {
		search(helper) {
			this.setFilterQuery();
			if (helper.state.query || (!helper.state.query && this.filterQuery != '')) {
				helper.search();
				this.searchPerformed = true;
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
						authorName: this.searchFilters.authorName,
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
			this.showNoSearchParametersWarning = !this.query && !this.filterQuery;
			this.showDefaultMessage = false;
		},
		setFilterQuery() {
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
				authorName: this.sanitizeQueryParameter(this.$route, "authorName")
			};

			// Update Pinia store
			this.searchStore.saveSearchFilters(this.searchFiltersFromUrl);
			this.searchStore.saveSearchQuery(this.query);

			//take searchFilters from the URL, build the Algolia filter query and triggers search if non-empty
			this.filterQuery = this.buildFilterQuery(this.searchFiltersFromUrl);
			if (this.filterQuery || this.query) {
				this.searchPerformed = true;
				this.historyChanged = true;
			}

			//this.showNoSearchParametersWarning = !this.query && !this.filterQuery && !this.hasActiveFilters;
		},
		pageChange() {
			document.body.scrollIntoView();
		},
		initSearchClient() {
			this.searchClient = algoliasearch(
				this.$config.algoliaAppId,
				this.$config.algoliaApiKey
			);
		}
	},
	watch: {
		launchSearchFromBar: {
			handler(newValue, oldValue) {
				this.updateQuery();
			},
			immediate: false
		}
	},
	head() {
		return {
			title: `${this.document.data.meta_title} - Fristouille, la cuisine durable en toute simplicité`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: `${this.document.data.meta_title} - Fristouille, la cuisine durable en toute simplicité`
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: this.document.data.facebook_image.url
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: `https://www.fristouille.org${this.document.url}`
				}
			]
		}
	},
	async asyncData({ $prismic, $axios, $config, params, error }) {
		try {
			const document = (await $prismic.api.getSingle('recipes'));
			return {
				document: document
			}

		} catch (e) {
			// Returns error page
			console.log("error in recettes", e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	mounted() {
		this.initSearchClient();
		this.triggerSearchOnPageLoad();
	}
}
</script>
