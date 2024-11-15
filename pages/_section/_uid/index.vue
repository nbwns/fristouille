<template>
	<article class="container space-y-8 lg:space-y-12 py-12 flex flex-col lg:flex-row gap-6">
		<main class="w-full" :class="hasCtas ? 'basis-full lg:basis-4/5' : 'basis-full'"
			:style="hasCtas ? 'max-width: 840px' : ''">
			<article-header :title="document.data.title" :introduction="document.data.introduction"
				:parentTitle="$prismic.asText(parent.data.title)" :parentUrl="parent.url" />

			<div class="flex flex-col justify-center items-start gap-6 w-full">
				<div class="flex flex-col justify-center items-start gap-6 w-full" :class="{ 'xl:w-2/3': hasCtas }">
					<!-- content blocks -->
					<content-block v-for="block in contentBlocks" :key="block.id" :title="block.primary.content_title"
						:content="block.primary.content_body" :image="block.primary.content_image"
						:callout="block.primary.callout" />
				</div>
			</div>
			<!-- featured recipes -->
			<featured-recipes v-for="(list, index) in horizontalLists" :key="`recipes-${index}`" :title="list.title"
				:items="list.recipes" :link="list.seeAllQuery" :hidden="!list.recipes || list.recipes.length === 0" />
			<!-- related pages -->
			<related-pages :pages="relatedPages" />
		</main>

		<aside v-if="hasCtas" class="w-full basis-1/4">
			<call-to-action v-for="cta in ctas" :key="cta.id" :ctaUrl="cta.primary.cta_url" :ctaText="cta.primary.cta_text"
				:ctaHeader="cta.primary.cta_header" />
		</aside>
	</article>
</template>

<script>
import FeaturedRecipes from '~/components/FeaturedRecipes'
import ContentBlock from '~/components/ContentBlock';
import RelatedPages from '~/components/RelatedPages';
import CallToAction from '~/components/CallToAction';
import Breadcrumb from '~/molecules/Breadcrumb.vue';
import TitleArticle from '~/molecules/TitleArticle.vue';
import Spacer from '~/molecules/Spacer.vue';
import ArticleHeader from '~/components/ArticleHeader.vue';

export default {
	name: 'post',
	components: {
		FeaturedRecipes,
		ContentBlock,
		RelatedPages,
		Breadcrumb,
		TitleArticle,
		Spacer,
		CallToAction,
		ArticleHeader
	},
	head() {
		return {
			title: this.document.data.meta_title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.document.data.meta_description
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.document.data.meta_title
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
			let parent = null;

			// Query to get post content
			const document = (await $prismic.api.getByUID('childpage', params.uid));
			const page = document.data;

			if (page.parent_page.id) {

				//Get parent page in order to create a breadcrumb
				const parents = (await $prismic.api.query(
					$prismic.predicates.at('document.id', page.parent_page.id)
				)).results;

				if (parents.length > 0) {
					parent = parents[0];
				}

			}

			let horizontalLists = [];
			let contentBlocks = [];
			let ctas = [];
			let relatedPages = [];

			//featured recipes
			if (page.body && page.body.length > 0) {

				try {
					let horizontalListsSlices = page.body.filter(s => s.slice_type === 'horizontal_list');

					//horizontal lists of recipes - get content from Algolia
					horizontalLists = await Promise.all(
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

					let relatedPagesSlices = page.body.filter(s => s.slice_type === 'related_pages');
					relatedPages = await Promise.all(
						relatedPagesSlices.map(async (slice) => {
							//get data of related pages in Prismic
							let related = null;
							const relateds = (await $prismic.api.query(

								$prismic.predicates.at('document.id', slice.primary.related_page.id)
							)).results;

							if (relateds.length > 0) {
								related = relateds[0];
							}
							return related;
						})
					);
				}
				catch (error) {
					console.log('error in child page', error)
				}
			}

			//content blocks
			if (page.body1 && page.body1.length > 0) {
				contentBlocks = page.body1;
			}

			//calls to action
			if (page.body2 && page.body2.length > 0) {
				ctas = page.body2;
			}

			// Returns data to be used in template
			return {
				document: document,
				parent: parent,
				horizontalLists: horizontalLists,
				contentBlocks: contentBlocks,
				relatedPages: relatedPages,
				ctas: ctas,
				hasCtas: ctas.length > 0
			}
		} catch (e) {
			// Returns error page
			console.log("error in child page", e);
			error({ statusCode: 500, message: 'Error' })
		}
	},
}
</script>
