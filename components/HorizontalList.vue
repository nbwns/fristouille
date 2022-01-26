<template>
	<div>
		<div class="relative">
			<h2 class="text-xl">{{title}}</h2>
			<div class="absolute inset-y-0 right-0 w-16"><nuxt-link :to="`/Recettes?query=${link}`">tout voir</nuxt-link></div>
		</div>
		<ais-instant-search index-name="Recipes" :search-client="searchClient" :search-function="search" >		
			<ais-configure
			:hits-per-page.camel="4"
			:distinct="true"
			/>
			<ais-hits>
				<template v-slot="{ items }">
					<div class="grid grid-cols-4 gap-4">
						<RecipeCard v-for="item in items" :key="item.objectID" :searchResult="item" />
					</div>
				</template>
			</ais-hits>
		</ais-instant-search>
	</div>
</template>

<script>
import algoliaSearch from 'algoliasearch/lite'

export default {
	props: ['title', 'query', 'link'],
	methods: {
		search(helper){
			helper.setQuery(this.query).search();
		}
	},
	created(){
		this.searchClient = algoliaSearch(this.$config.algoliaAppId,this.$config.algoliaApiKey)
	}
}
</script>

<style>

</style>