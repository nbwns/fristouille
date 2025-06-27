<template>
	<section class="flex flex-col container w-full">
		<!-- recipe header -->
		<div class="flex flex-col space-y-8 lg:space-y-12 pb-10 lg:pb-0">
			<!-- Conditionnement des composants individuels plutôt que toute la page -->
			<RecipeHeader v-if="recipe" :name="recipe.name" :authorName="recipe.authorName" :authorWeb="recipe.authorWeb"
				:description="recipe.description" :picture="recipe.picture" />

			<div class="flex flex-col space-y-8 lg:space-y-12 w-full">
				<!-- recipe info section -->
				<RecipeInfoSection class="print:hidden" v-if="recipe" :preparationTime="recipe.preparationTime / 60" :cookTime="recipe.cookTime / 60"
					:difficulty="recipe.difficulty" :price="recipe.price" :months="recipe.months"
					:allYearLongLabel="label('allYearLong')" />

				<client-only>
					<recipe-share class="print:hidden" :name="recipeName"></recipe-share>
				</client-only>
				<!-- ingredients -->
				<client-only>
					<RecipeIngredients 
						v-if="compositions && compositions.length"
						:ingredients="compositions"
						:initialServings="servings" 
						:recipeYield="recipeYield"
						@update:servings="updateServings" />
				</client-only>

				<!-- Explication de la recette -->
				<RecipePreparation v-if="recipe" :procedure="procedure" :source="recipe.source" />
			</div>

			<card-tip v-if="article" :article="article" class="print:hidden"/>

			<!-- liste des tags -->
			<RecipeTags v-if="recipe" :tagsList="recipe.tagsList" :baseRecipe="recipe.baseRecipe" :category="recipe.category"
				:cuisine="recipe.cuisine" :freeFrom="recipe.free" class="print:hidden" />

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
import IngredientList from '~/components/IngredientList.vue';
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
			recipe: null,           
			servings: 2,           
			article: null,      
			// to be independant from recipe object (in client-only component) 
			compositions: [],       
			recipeYield: 2,        
			recipeName: null,
			recipeId: null,        
		}
	},
	methods: {
		label(key) {
			return labels[key];
		},
		toDuration(totalSeconds) {
			const hours = Math.floor(totalSeconds / 3600);
    		const minutes = Math.floor((totalSeconds % 3600) / 60);
			console.log("duration", totalSeconds, hours, minutes)
			return `PT${hours}H${minutes}M`;
		},
		updateServings(newServings) {
			this.servings = newServings;
		},
		async fetchRecipeData() {
			// Used when the (static) page is accessed directly (NOT via a link), recipe data needs to be refetched in order to change the number of servings dynamically
			// --> see if possible to change that by fetching data attributes instead
			const recipeId = this.recipeId || this.$route.params.id;
			if (!recipeId) return;
			
			try {
				console.log("Fetching recipe data for", recipeId);
				const res = await this.$axios({
					url: `${this.$config.queryFunction}?filter=${recipeId}&compositions=true`,
					method: "get"
				});
				
				if (res.data && res.data.length > 0) {
					const recipeData = res.data[0];
					
					// Mise à jour des compositions et du yield uniquement
					try {
						const compositions = JSON.parse(recipeData.compositionsJson || '[]');
						compositions.sort((a, b) => b.quantity - a.quantity);
						this.compositions = compositions;
						this.servings = recipeData.yield || 2;
						this.recipeYield = recipeData.yield || 2;
						this.recipeName = recipeData.recipeName	;
						console.log("Data fetched:", compositions.length, "compositions for", this.servings, "servings");
					} catch (e) {
						console.error("Erreur lors du parsing des compositions", e);
						this.compositions = [];
					}
				}
			} catch (e) {
				console.error("Erreur lors de la récupération des données de recette", e);
			}
		}
	},
	async asyncData({ params, error, payload, $axios, $config: { queryFunction }, $prismic }) {
		let recipe = null;
		let article = null;
		let servings = 2;
		let compositions = [];
		let recipeYield = 2;
		let recipeId = null;
		let recipeName = null;
		
		if (payload) {
			recipe = payload;
			servings = recipe.yield || 2;
			recipeYield = recipe.yield || 2;
			recipeName = recipe.name;
			recipeId = recipe.recipeId || params.id;

			try {
				compositions = JSON.parse(recipe.compositionsJson || '[]');
				compositions.sort((a, b) => b.quantity - a.quantity);
			} catch (e) {
				console.error("Erreur lors du parsing des compositions:", e);
				compositions = [];
			}

			if (recipe.prismicPageId) {
				try {
					article = await $prismic.api.getByID(recipe.prismicPageId);
				} catch (e) {
					console.error("Erreur lors de la récupération de l'article:", e, recipeId, recipe.prismicPageId);
				}
			}
		}
		else if (params.id){
			recipeId = params.id;
			try{
				console.log("fetchRecipe in asyncData", params.id);
				const res = await $axios({
					url: `${queryFunction}?filter=${params.id}`,
					method: "get"
				})
				if (res.data && res.data.length > 0) {
					recipe = res.data[0];
					servings = recipe.yield || 2;
					recipeYield = recipe.yield || 2;
					recipeName = recipe.name;

					try {
						compositions = JSON.parse(recipe.compositionsJson || '[]');
						compositions.sort((a, b) => b.quantity - a.quantity);
					} catch (e) {
						console.error("Erreur lors du parsing des compositions:", e);
						compositions = [];
					}

					if (recipe.prismicPageId) {
						try {
							article = await $prismic.api.getByID(recipe.prismicPageId);
						} catch (e) {
							console.error("Erreur lors de la récupération de l'article:", e, recipeId, recipe.prismicPageId);
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
			recipe, 
			compositions,
			servings,
			recipeYield,
			article,
			recipeId,
			recipeName
		};
	},
	created() {
		// Cette méthode s'exécute côté serveur et client
		// console.log("created hook", this.recipe ? "recipe exists" : "no recipe", 
		// 	this.compositions ? `${this.compositions.length} compositions` : "no compositions");
	},
	mounted() {
		// Cette méthode s'exécute uniquement côté client
		// console.log("mounted hook", this.recipe ? "recipe exists" : "no recipe", 
		// 	this.compositions ? `${this.compositions.length} compositions` : "no compositions");
		
		// Si les compositions sont vides, récupérer les données côté client
		if (!this.compositions || !this.compositions.length) {
			console.log("Compositions not available, fetching on client side");
			this.fetchRecipeData();
		}
	},
	head() {
		let structuredData = {}
		let ogPictureHttp = this.$config.noPictureUrl;

		if(this.recipe){
			let keywords = this.recipe.free ? this.recipe.free.map((x) => `sans ${x}`) : [];
			if(this.recipe.tagsList){
				keywords = this.recipe.tagsList.concat(keywords);
			}

			if(this.recipe.pictureMedium){
				ogPictureHttp = this.recipe.pictureMedium;
			}
			
			structuredData = {
				"@context": "https://schema.org/",
				'@type': 'Recipe',
				name: this.recipe.name,
				image: ogPictureHttp,
				author: {"@type": "Person", name: this.recipe.authorName},
				cookTime: this.toDuration(this.recipe.cookTime),
				prepTime: this.toDuration(this.recipe.preparationTime),
				recipeCategory: this.recipe.category ? this.recipe.category.join(", ") : "",
				recipeInstructions: this.recipe.procedure,
				recipeYield: this.recipe.yield,
				recipeIngredient: this.recipe.compositionsStructuredData,
				keywords: keywords
			}

			if(this.recipe.cuisine){
				structuredData["recipeCuisine"] = this.recipe.cuisine;
			}

			if(this.recipe.description){
				structuredData["description"] = this.recipe.description;
			}
		}	
		
		return {
			title: (this.recipe) ? `${this.recipe.name} - Fristouille, la cuisine durable en toute simplicité` : "",
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: (this.recipe) ? this.recipe.description : ""
				},
				{
					hid: 'og:title',
					name: 'title',
					property: 'og:title',
					content: (this.recipe) ? `${this.recipe.name} - Fristouille, la cuisine durable en toute simplicité` : ""
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: (this.recipe) ? this.recipe.description : ""
				},
				{
					hid: 'og:image',
					name: 'image',
					property: 'og:image',
					content: ogPictureHttp
				},
				{
					hid: 'og:url',
					property: 'og:url',
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