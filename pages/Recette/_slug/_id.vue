<template>
	<section class="flex flex-col justify-center layer__xl mx-auto">
		<spacer size="md"></spacer>
		<div v-if="recipe">
			<div class="items-start justify-start mx-auto">
				<!-- picture -->
				<!-- TODO: check correct sizes for viewports -->
				<!-- title -->
				<div class="flex flex-col space-y-4 d-1">
					<h1 class="big-title text-balance w-full lg:max-w-xl">{{ recipe.name }}</h1>
					<div class="text-white-300 text-usual leading-none">
						par
						<span v-if="recipe.authorWeb">
							<a :href="recipe.authorWeb" target="_blank"
								class="text-base font-inter text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
								{{ recipe.authorName }}
							</a>
						</span>
						<span v-else>
							{{ recipe.authorName }}
						</span>
					</div>
				</div>
				<spacer size="xs"></spacer>
				<div class="flex flex-col md:flex-row justify-between w-full noprint">
					<!-- description -->
					<div class="flex flex-col">
						<h2 class="text-big text-balance d-2">{{ recipe.description }}</h2>
					</div>
				</div>
				<div class="w-full">
					<img v-if="recipe.picture"
						class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-md noprint"
						:src="recipe.picture" :alt="`Photo d'un plat de ${recipe.name}`" />
				</div>
				<spacer size="xs"></spacer>

			</div>
			<spacer size="xs"></spacer>

			<div class="flex flex-col gap-5">
				<div class="flex w-full justify-between gap-5">
					<RecipeInfoBox label="Préparation" :value="`${(recipe.preparationTime / 60)} min`">
						<template #content>
							<time>{{ (recipe.preparationTime / 60) }} min</time>
						</template>
					</RecipeInfoBox>
					<RecipeInfoBox label="Cuisson" :value="`${(recipe.cookTime / 60)} min`">
						<template #content>
							<time>{{ (recipe.cookTime / 60) }} min</time>
						</template>
					</RecipeInfoBox>
				</div>

				<div class="flex w-full justify-between gap-5">
					<RecipeInfoBox label="Difficulté" :value="difficultyText" />
					<RecipeInfoBox label="Prix" :value="priceText" />
				</div>

				<div class="flex w-full justify-between gap-5">
					<RecipeInfoBox label="Saisonnalité" :className="'pb-2'">
						<template #content>
							<div v-if="recipe.months.length < 12" class="flex flex-wrap gap-2">
								<nuxt-link v-for="month in recipe.months" :key="month" :to="`/Recettes?months=${month}`">
									<tag class="text-xs" look="light">{{ month }}</tag>
								</nuxt-link>
							</div>
							<div v-else>
								<p>{{ label('allYearLong') }}</p>
							</div>
						</template>
					</RecipeInfoBox>
				</div>
			</div>
			<spacer size="xs"></spacer>

			<!-- ingredients -->
			<div class="flex flex-col space-y-2">
				<h3>Ingrédients</h3>
				<ServingsAdjuster v-model="servings" />
			</div>


			<spacer size="xs"></spacer>
			<IngredientList :ingredients="recipe.compositions" :servingsRatio="servingsRatio" />

			<spacer size="lg"></spacer>

			<!-- procedure -->
			<h3>Préparation</h3>
			<spacer size="xs"></spacer>

			<div v-html="procedure" class="text-usual"></div>

			<div v-if="recipe.source">
				<a v-if="recipe.source.startsWith('http')" :href="recipe.source" target="_blank"
					class="text-base font-inter text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
					Vers la publication originale
				</a>
				<span v-else><em class="text-base">{{ recipe.source }}</em></span>
			</div>


			<spacer size="lg"></spacer>

			<!-- related article -->
			<div v-if="article" class="w-fit noprint">
				<h3 class="title">l'astuce fristouille</h3>
				<card-tip :img="article.data.cover.url" :imgAlt="article.data.cover.alt" :path="article.url"
					:title="$prismic.asText(article.data.title)" :abstract="article.data.tip_abstract" />
			</div>

			<spacer size="sm"></spacer>

			<h3 class="noprint">Tags</h3>
			<spacer size="xs"></spacer>
			<!-- tags -->
			<div class="flex flex-row flex-wrap justify-start items-start  gap-2 noprint">
				<!-- tags -->
				<nuxt-link v-for="t in recipe.tagsList" :key="t" :to="`/Recettes?q=${t}`" class="noprint">
					<tag look="light">{{ t }}</tag>
				</nuxt-link>

				<!-- base recipe -->
				<nuxt-link v-if="recipe.baseRecipe" key="baseRecipe" :to="`/Recettes?baseRecipe=${recipe.baseRecipe}`">
					<tag look="light" class="lowercase">{{ recipe.baseRecipe.replaceAll('-', ' ') }}</tag>
				</nuxt-link>

				<!-- category -->
				<nuxt-link v-for="cat in recipe.category" :key="cat" :to="`/Recettes?category=${cat}`">
					<tag look="light" class="lowercase">{{ cat }}</tag>
				</nuxt-link>

				<!-- cuisine -->
				<nuxt-link v-if="recipe.cuisine" key="cuisine" :to="`/Recettes?cuisine=${recipe.cuisine}`">
					<tag look="light" class="lowercase">{{ recipe.cuisine }}</tag>
				</nuxt-link>

				<!-- allergies -->
				<nuxt-link v-for="free in recipe.free" :key="free" :to="`/Recettes?free=${free}`">
					<tag look="light" class="lowercase">sans {{ free }}</tag>
				</nuxt-link>


			</div>

			<spacer size="lg"></spacer>
		</div>
	</section>
</template>

<script>
import { marked } from 'marked'
import labels from '~/plugins/labels'
import { DateTime } from "luxon";
import Tag from '~/molecules/Tag.vue';
import CardTip from '~/components/CardTip.vue';
import Spacer from '~/molecules/Spacer.vue';
import IngredientList from '~/components/IngredientList.vue'; // Add this import
import ServingsAdjuster from '~/components/ServingsAdjuster.vue';
import RecipeInfoBox from '~/components/RecipeInfoBox.vue';

export default {
	components: {
		RecipeInfoBox,
		Tag, CardTip, Spacer, IngredientList, ServingsAdjuster
	},
	computed: {
		procedure() {
			return (this.recipe.procedure) ? marked(this.recipe.procedure) : ""
		},
		ingredients() {
			return (this.recipe.ingredients) ? marked(this.recipe.ingredients) : ""
		},
		inSeason() {
			let currentMonth = DateTime.now().month;
			if (this.recipe.months) {
				return this.recipe.months.includes(currentMonth.toString());
			}
			return false;
		},
		servingsRatio() {
			return this.servings / this.recipe.yield;
		},
		difficultyText() {
			switch (this.recipe.difficulty) {
				case 1:
					return 'Facile';
				case 2:
					return 'Moyenne';
				case 3:
					return 'Difficile';

			}
		},
		priceText() {
			switch (this.recipe.price) {
				case '€':
					return 'Bon marché';
				case '€€':
					return 'Abordable';
				case '€€€':
					return 'On se fait plaisir';

			}
		}
	},
	methods: {
		label(key) {
			return labels[key];
		},
		computedQuantity(qty) {
			return Math.round((qty * this.servingsRatio) * 2) / 2;
		}
	},
	async asyncData({ params, error, payload, $axios, $config: { queryFunction }, $prismic }) {
		console.log("params", params)
		if (payload) {
			console.log("payload", payload.name);
			let recipe = payload;
			let article = null;

			if (recipe.compositions) {
				recipe.compositions.sort((a, b) => b.quantity - a.quantity);
			}

			//if there's an associated page in Prismic, retrieve it
			if (recipe.prismicPageId) {
				//TODO: limit amount of data retrieved (graphQuery and fetch don't work)
				article = (await $prismic.api.getByID(recipe.prismicPageId));
			}

			return { recipe: recipe, servings: recipe.yield, article: article };
		}
		else {
			if (params.id) {
				console.log("fetchRecipe", params.id);
				const res = await $axios({
					url: `${queryFunction}?filter=${params.id}`,
					method: "get"
				})
				if (res.data && res.data.length > 0) {
					let recipe = res.data[0];
					let article = null;

					let compositions = JSON.parse(recipe.compositionsJson);

					if (compositions) {
						compositions.sort((a, b) => b.quantity - a.quantity);
					}

					recipe.compositions = compositions;

					//if there's an associated page in Prismic, retrieve it
					if (recipe.prismicPageId) {
						//TODO: limit amount of data retrieved (graphQuery and fetch don't work)
						article = (await $prismic.api.getByID(recipe.prismicPageId));

					}



					return { recipe: recipe, servings: recipe.yield, article: article };
				}
				else {
					error({ statusCode: 404, message: 'Page not found' })
				}
			}

			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	head() {
		return {
			title: this.recipe.name,
			//adapt meta 
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.recipe.description
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.recipe.name
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.recipe.description
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: this.recipe.pictureMedium
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: `https://www.fristouille.org/Recette/${this.recipe.slug}/${this.recipe.recipeId}`
				}
			]
		}
	}
}

</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	-moz-appearance: textfield;
}
</style>
