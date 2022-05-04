<template>
  <div class="">
	  <form method="GET" action="/recettes">
		<input type="search" class="border-2" name="query"/> <button class="bg-blue-900 text-white" type="submit">🔍</button>
	</form>
    <ais-instant-search index-name="Recipes" :search-client="searchClient" :routing="routing" :search-function="search" >		
		<ais-configure
			:hits-per-page.camel="10"
			:distinct="true"
			:filters="filters"
		/>
		<ais-search-box>
			<template>&nbsp;</template>
		</ais-search-box>
		<ais-hits>
			<template v-slot="{ items }">
				<RecipeCard v-for="item in items" :key="item.objectID" :searchResult="item" />
			</template>
		</ais-hits>
		<ais-pagination />
    </ais-instant-search>
	<advanced-search @filtersChanged="setFilters($event)"/>
  </div>
</template>

<script>
import algoliaSearch from 'algoliasearch/lite'
import RecipeCard from '~/components/RecipeCard.vue'
import AdvancedSearch from '~/components/AdvancedSearch.vue'
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { singleIndex as singleIndexMapping } from 'instantsearch.js/es/lib/stateMappings';

export default {
	components: {
		RecipeCard,
		AdvancedSearch
	},
	data(){
        return{
            searchClient: algoliaSearch(this.$config.algoliaAppId,this.$config.algoliaApiKey),
			routing: {
				router: historyRouter(),
        		stateMapping: singleIndexMapping('Recipes'),
      		},
			filters:''
        }
    },
	methods: {
		search(helper){
			if (helper.state.query || (!helper.state.query && this.filters != '')) {
				helper.search();
			}
		},
		setFilters($event){
			this.filters = $event;
		}
	}
}
</script>
