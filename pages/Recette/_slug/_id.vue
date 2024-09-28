<template>
	<section class="flex flex-col justify-center layer__xl mx-auto">
		<spacer size="md"></spacer>
		<div v-if="recipe">
			<div class="items-start justify-start mx-auto">
				<!-- picture -->
				<!-- TODO: check correct sizes for viewports -->
				<!-- title -->
				<h1 class="big-title text-balance">{{ recipe.name }}</h1>
				<p class="text-white-300 text-usual py-3">
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
				</p>
				<spacer size="xs"></spacer>

				<div class="w-full">
					<img v-if="recipe.picture"
						class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-md noprint"
						:src="recipe.picture" :alt="`Photo d'un plat de ${recipe.name}`" />
				</div>
				<spacer size="xs"></spacer>
				<div class="flex flex-col md:flex-row justify-between w-full noprint">
					<!-- description -->
					<div class="flex flex-col">
						<p class="text-bigbig text-balance">{{ recipe.description }}</p>
					</div>
				</div>
			</div>
			<spacer size="md"></spacer>

			<div class="flex w-full justify-between gap-5">
				<!-- prep time and cook time -->
				<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
					<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime / 60)}M`" />
					<p>Préparation</p>
					<time class="title-paragraph">{{ (recipe.preparationTime / 60) }} min</time>
				</div>

				<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
					<meta itemprop="cookTime" :content="`PT${(recipe.cookTime / 60)}M`" />
					<p>Cuisson</p>
					<time class="title-paragraph">{{ (recipe.cookTime / 60) }}min</time>
				</div>


			</div>

			<spacer size="xs"></spacer>

			<div class="flex w-full justify-between gap-5">
				<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
					<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime / 60)}M`" />
					<p>Difficulté</p>
					<div class="title-paragraph">{{ difficultyText }}</div>
				</div>

				<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
					<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime / 60)}M`" />
					<p>Prix</p>
					<div class="title-paragraph">{{ priceText }}</div>
				</div>
			</div>

			<spacer size="sm"></spacer>

			<!-- seasonality (a list of months) -->
			<div class="flex flex-col justify-start items-start text-big space-y-4" v-if="recipe.months">
				<p class="font-bold">Saisonnalité:</p>
				<div v-if="recipe.months.length < 12" class="flex flex-wrap gap-2">
					<nuxt-link v-for="month in recipe.months" :key="month" :to="`/Recettes?months=${month}`">
						<tag look="light">{{ month }}</tag>
					</nuxt-link>
				</div>
				<div v-else>
					<p>{{ label('allYearLong') }}</p>
				</div>
			</div>

			<spacer size="lg"></spacer>

			<!-- ingredients -->
			<h2>Ingrédients</h2>
			<spacer size="xs"></spacer>
			<!-- change number of plates -->
			<div
				class="flex flex-row items-center gap-2 bg-black-300 dark:bg-purple-100 00 w-fit border-black-200 dark:border-purple-200 ">
				<button
					class="title-article border-r-2 border-r-black-200 dark:border-r-purple-200 dark:hover:border-r-purple-200 text-center px-4 dark:hover:bg-purple-200 noprint"
					@click="(servings > 0) ? servings-- : servings" :disabled="servings == 1">-</button>
				<input
					class="max-w-[40px] bg-black-300 dark:bg-purple-100 rounded focus:outline-none focus:ring focus:ring-black-200 block p-2.5 placeholder:text-white-200 text-white-100 title-paragraph text-center"
					type="number" v-model="servings" step="1" min="1" max="30">
				<button
					class="title-article border-l-2 border-l-black-200 dark:border-l-purple-200 dark:hover:border-l-purple-200 dark:hover:bg-purple-200 text-center px-4 noprint"
					@click="servings++">+</button>
			</div>
			<p class="text-usual">Nombre de personnes</p>
			<!-- yield -->
			<!-- rajouter directement le mot "personnes" à la suite du nombre dans l'input -->
			<!-- <p><span itemprop="recipeYield"> Pour {{recipe.yield}}</span> personnes</p> -->
			<!-- list of compositions: quantity / units / ingredient name / remark / optional -->

			<spacer size="xs"></spacer>

			<div v-for="c in recipe.compositions" :key="c.name" class="py-0.5">
				<div v-if="c.ingredient[0]" class="text-big font-light flex">
					<div class="font-bold" v-if="c.quantity > 0">
						<!-- quantity -->
						<span class="">{{ computedQuantity(c.quantity) }}&nbsp;</span>
						<!-- units -->
						<span v-if="c.units != 'pièce'">{{ c.units }} <span class="font-light">de &nbsp;</span> </span>
					</div>
					<div>
						<!-- ingredient -->
						<span>{{ c.ingredient }}</span>
						<!-- remark -->
						<i>{{ c.remark }}</i>
						<!-- if no quantity -->
						<span v-if="c.quantity == 0">selon votre goût</span>
						<!-- optional -->
						<span v-if="c.optional">(facultatif)</span>
					</div>
				</div>
			</div>

			<spacer size="lg"></spacer>

			<!-- procedure -->
			<h2>Préparation</h2>
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

			<h2 class="noprint">Tags</h2>
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


export default {
	components: { Tag, CardTip, Spacer },
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
		},
		addServings() {
			console.log(this.servings);
			this.servings++;
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