<template>
	<section class="flex flex-col container w-full">
		<!-- recipe header -->
		<div v-if="recipe" class="flex flex-col space-y-8 lg:space-y-12 pb-10 lg:pb-0">

			<RecipeHeader :name="recipe.name" :authorName="recipe.authorName" :authorWeb="recipe.authorWeb"
				:description="recipe.description" :picture="recipe.picture" />

			<div class="flex flex-col space-y-8 lg:space-y-12 w-full">

				<!-- recipe info section -->
				<RecipeInfoSection :preparationTime="recipe.preparationTime / 60" :cookTime="recipe.cookTime / 60"
					:difficulty="recipe.difficulty" :price="recipe.price" :months="recipe.months"
					:allYearLongLabel="label('allYearLong')" />

				<!-- <recipe-share :name="recipe.name"></recipe-share> -->

				
				<!-- ingredients -->
				<client-only>
				<RecipeIngredients 
					:ingredients="recipe.compositions"
					:initialServings="servings" 
					:recipeYield="recipe.yield"
					@update:servings="servings = $event" />
				</client-only>
				<!-- Explication de la recette -->
				<RecipePreparation :procedure="procedure" :source="recipe.source" />
			</div>

			<card-tip :article="article" v-if="article"/>

			<!-- liste des tags -->
			<RecipeTags :tagsList="recipe.tagsList" :baseRecipe="recipe.baseRecipe" :category="recipe.category"
				:cuisine="recipe.cuisine" :freeFrom="recipe.free" />

		</div>
	</section>
</template>

<script>
import { marked } from 'marked'
import labels from '~/plugins/labels'
import { DateTime } from "luxon";
import Tag from '~/molecules/ButtonTag.vue';
import CardTip from '~/components/CardTip.vue';
import Spacer from '~/molecules/Spacer.vue';
import IngredientList from '~/components/IngredientList.vue'; // Add this import
import ServingsAdjuster from '~/components/ServingsAdjuster.vue';
import RecipeInfoSection from '~/components/RecipeInfoSection.vue';
import RecipeHeader from '~/components/RecipeHeader.vue';
import RecipePreparation from '~/components/RecipePreparation.vue';
import RecipeTags from '~/components/RecipeTags.vue';
import RecipeIngredients from '~/components/RecipeIngredients.vue';
import RecipeShare from '~/components/RecipeShare.vue';

export default {
	components: {
		RecipeInfoSection,
		Tag, CardTip, Spacer, IngredientList, ServingsAdjuster,
		RecipeHeader,
		RecipePreparation,
		RecipeTags,
		RecipeIngredients,
		RecipeShare
	},
	computed: {
		procedure() {
			return (this.recipe && this.recipe.procedure) ? marked(this.recipe.procedure) : ""
		},
		ingredients() {
			return (this.recipe && this.recipe.ingredients) ? marked(this.recipe.ingredients) : ""
		},
		inSeason() {
			let currentMonth = DateTime.now().month;
			if (this.recipe && this.recipe.months) {
				return this.recipe.months.includes(currentMonth.toString());
			}
			return false;
		}
	},
	data() {
		return {
			recipe: this.recipe || {},
			servings: this.servings || 2
		}
	},
	methods: {
		label(key) {
			return labels[key];
		},
		toDuration(totalMinutes) {
			const hours = Math.floor(totalMinutes / 60);
			const minutes = totalMinutes % 60;
			return `PT${hours}H${minutes}M`;
		}, 
		async fetchData() {
			if (!this.$route.params.id) return;
			
			try {
				console.log("fetchData", this.$route.params.id);
				const res = await this.$axios({
					url: `${this.$config.queryFunction}?filter=${this.$route.params.id}`,
					method: "get"
				});
				
				if (res.data && res.data.length > 0) {
					const recipe = res.data[0];
					
					try {
						const compositions = JSON.parse(recipe.compositionsJson || '[]');
						compositions.sort((a, b) => b.quantity - a.quantity);
						recipe.compositions = compositions;
					} catch (e) {
						console.error("Erreur lors du parsing des compositions", e);
						recipe.compositions = [];
					}
					
					this.recipe = recipe;
					this.servings = recipe.yield || 2;
					
					// Récupérer l'article si nécessaire
					if (recipe.prismicPageId) {
						try {
							this.article = await this.$prismic.api.getByID(recipe.prismicPageId);
						} catch (e) {
							console.error("Erreur lors de la récupération de l'article", e);
						}
					}
				}
			} catch (e) {
				console.error("Erreur lors de la récupération de la recette", e);
			}
		}
	},
	async asyncData({ params, error, payload, $axios, $config: { queryFunction }, $prismic }) {
		let recipe = null;
		let article = null;
		let servings = 0;
		
		//console.log("params", params)
		if (payload) {
			//console.log("payload", payload.name);
			recipe = payload;
			servings = recipe.yield || 2;

			try {
				let compositions = JSON.parse(recipe.compositionsJson || '[]');
				compositions.sort((a, b) => b.quantity - a.quantity);
				recipe.compositions = compositions;
			} catch (e) {
				console.error("Erreur lors du parsing des compositions:", e);
				recipe.compositions = [];
			}

			//if there's an associated page in Prismic, retrieve it
			if (recipe.prismicPageId) {
				try {
					article = await $prismic.api.getByID(recipe.prismicPageId);
				} catch (e) {
					console.error("Erreur lors de la récupération de l'article:", e);
				}
			}
		}
		else if (params.id){
			//called when recipe page is accessed from another page
			try{
				console.log("fetchRecipe", params.id);
				const res = await $axios({
					url: `${queryFunction}?filter=${params.id}`,
					method: "get"
				})
				if (res.data && res.data.length > 0) {
					recipe = res.data[0];
					servings = recipe.yield || 2;

					try {
						let compositions = JSON.parse(recipe.compositionsJson || '[]');
						compositions.sort((a, b) => b.quantity - a.quantity);
						recipe.compositions = compositions;
					} catch (e) {
						console.error("Erreur lors du parsing des compositions:", e);
						recipe.compositions = [];
					}

					if (recipe.prismicPageId) {
						try {
							article = await $prismic.api.getByID(recipe.prismicPageId);
						} catch (e) {
							console.error("Erreur lors de la récupération de l'article:", e);
						}
					}
				}
				else {
					error({ statusCode: 404, message: 'Recette non trouvée' })
				}

			} catch (e) {
				console.error("Erreur lors de la récupération de la recette:", e);
				return error({ statusCode: 500, message: 'Erreur serveur' });
			}
		} else {
			return error({ statusCode: 404, message: 'Recette non trouvée' });
		}

		return { 
			recipe: recipe || {}, 
			servings: servings, 
			article: article 
		};
	},
	created() {
		// S'exécute côté serveur et client
		if (!this.recipe || !this.recipe.recipeId) {
			console.log("Recipe not available in created, will fetch in mounted");
		}
	},
	mounted() {
		// S'exécute uniquement côté client
		console.log("mounted", this.recipe);
		if (!this.recipe || !this.recipe.compositions || !this.recipe.compositions.length) {
			console.log("Fetching recipe data on client side");
			this.fetchData();
		}
	},
	head() {
		
		let structuredData = {}
		
		if(this.recipe){
			let keywords = this.recipe.free.map((x) => `sans ${x}`);
			if(this.recipe.tagsList){
				keywords = this.recipe.tagsList.concat(keywords);
			}
			
			structuredData = {
				"@context": "https://schema.org/",
				'@type': 'Recipe',
				name: this.recipe.name,
				image: this.recipe.pictureMedium,
				author: [{name: this.recipe.authorName}],
				cookTime: this.toDuration(this.recipe.cookTime),
				prepTime: this.toDuration(this.recipe.preparationTime),
				description: this.recipe.description,
				recipeCategory: this.recipe.category.join(", "),
				recipeCuisine: this.recipe.cuisine,
				recipeInstructions: this.recipe.procedure,
				recipeYield: this.recipe.yield,
				recipeIngredient: this.recipe.compositionsStructuredData,
				keywords: keywords
			}
		}	
		
		
		return {
			title: (this.recipe) ? this.recipe.name : "",
			//adapt meta 
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: (this.recipe) ? this.recipe.description : ""
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: (this.recipe) ? this.recipe.name : ""
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: (this.recipe) ? this.recipe.description : ""
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: (this.recipe) ? this.recipe.pictureMedium : ""
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: (this.recipe) ? `https://www.fristouille.org/Recette/${this.recipe.slug}/${this.recipe.recipeId}` : ""
				}
			],
			script: [
				{
				type: 'application/ld+json',
				json: structuredData
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
