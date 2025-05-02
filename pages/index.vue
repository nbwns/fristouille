<template>
	<div class="container">
		<!-- Hero introduction -->
		<hero-section :hero-title="document.data.hero_title" :hero-title-emphasis="document.data.hero_title_emphasis" />

		<!-- search -->
		<home-search :quick-search-tags="quickSearchTags" />

		<!-- featured recipes -->
		<featured-recipes v-for="(list, index) in horizontalLists" :key="'r' + index" :title="list.title"
			:items="list.recipes" :link="list.seeAllQuery" />


		<!-- featured articles -->
		<featured-articles v-for="(list, index) in articlesLists" :key="'a' + index" :title="list.title" :items="list.items"
			:link="list.seeAllLink" />

		<spacer size="md"></spacer>
	</div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import FeaturedRecipes from '~/components/FeaturedRecipes'
import FeaturedArticles from '~/components/FeaturedArticles'
import HomeSearch from '~/components/HomeSearch.vue'
import SearchBar from '~/components/SearchBar.vue'
import SubmitButton from '~/molecules/SubmitButton.vue'
import Tag from '~/molecules/ButtonTag.vue'
import QuickFilter from '~/molecules/Filter.vue'
import BigTitle from '~/molecules/BigTitle.vue'
import LinkButton from '~/molecules/LinkButton.vue'
import Spacer from '~/molecules/Spacer.vue'
import HyperLink from '~/molecules/HyperLink.vue';



export default {
	components: {
		HeroSection,
		FeaturedRecipes,
		FeaturedArticles,
		SearchBar,
		HomeSearch,
		SubmitButton,
		Tag,
		QuickFilter,
		BigTitle,
		LinkButton,
		Spacer,
		HyperLink
	},
	data() {
		return {
			query: "",
			featuredQuery: "",
			featuredSeeAllLink: "",
			seasonsAndMonths: {
				winter: { 11: "Décembre", 0: "Janvier", 1: "Février", 2: "Mars" },
				spring: { 2: "Mars", 3: "Avril", 4: "Mai", 5: "Juin" },
				summer: { 5: "Juin", 6: "Juillet", 7: "Août", 8: "Septembre" },
				autumn: { 8: "Septembre", 9: "Octobre", 10: "Novembre", 11: "Décembre" }
			}
		}
	},
	computed: {
		currentSeasons() {
			let month = new Date().getMonth();

			let seasons = [];
			if (month in this.seasonsAndMonths.winter) {
				seasons.push("hiver");
			}
			if (month in this.seasonsAndMonths.spring) {
				seasons.push("printemps");
			}
			if (month in this.seasonsAndMonths.summer) {
				seasons.push("été");
			}
			if (month in this.seasonsAndMonths.autumn) {
				seasons.push("automne");
			}

			return seasons;
		}
	},
	methods: {
		getSeasonQuery(s) {
			let months;
			switch (s) {
				case "hiver":
					months = Object.values(this.seasonsAndMonths.winter);
					break;

				case "printemps":
					months = Object.values(this.seasonsAndMonths.spring);
					break;

				case "été":
					months = Object.values(this.seasonsAndMonths.summer);
					break;

				case "automne":
					months = Object.values(this.seasonsAndMonths.autumn);
					break;

			}

			return months.map((m) => `months=${m}`).join('&');
		}
	},
	head() {
		return {
			title: `${this.document.data.meta_title}`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: `${this.document.data.meta_title}`
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
			const document = (await $prismic.api.getSingle('homepage'));
			const page = document.data;
			// console.log("HOMEPAGE");

			let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');
			let featuredContentsSlices = page.body.filter(s => s.slice_type === 'featured_content');
			let quickSearchTagsSlices = page.body.filter(s => s.slice_type === 'quick_search_tags');

			//horizontal lists of recipes
			let horizontalLists = await Promise.all(
				horizontalListsSlices.map(async (hl) => {
					//based on the horizontal list query_filter prop, query the Algolia index to get the featured recipes
					const featuredRecipes = (await $axios.get($config.searchIndexFunction, {
						params: {
							query: hl.primary.query_term,
							filters: hl.primary.query_filters
						}
					}
					)).data;

					return {
						title: hl.primary.list_title,
						seeAllQuery: hl.primary.see_all_querystring,
						recipes: featuredRecipes
					}
				})
			);

			let articlesLists = await Promise.all(
				featuredContentsSlices.map(async (fc) => {
					//get the documents of the related articles
					let featured_ids = fc.items.map(i => i.featured_page.id);
					const featured_documents = (await $prismic.api.query(
						$prismic.predicates.any('document.id', featured_ids)
					)).results

					return {
						title: fc.primary.featured_title,
						seeAllLink: fc.primary.see_all_link.url,
						items: featured_documents
					};
				})
			);

			//return homepage data: the page itself, featured recipes and featured content
			return {
				document: document,
				horizontalLists: horizontalLists,
				articlesLists: articlesLists,
				quickSearchTags: quickSearchTagsSlices[0].items,
			}

		} catch (e) {
			// Returns error page
			console.log("error in homepage", e);
			error({ statusCode: 404, message: 'Page not found' })
		}
	}
}
</script>
