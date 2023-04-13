<template>
		<section class="flex flex-col justify-center layer__xl mx-auto">
			<spacer size="md"></spacer>	
			<div v-if="recipe">
				<div class="items-start justify-start mx-auto">
					<!-- author -->
					<p class="text-white-300 text-usual mb-3">
						{{recipe.authorName[0]}}
					</p>	
					<!-- title -->
					<h1>{{recipe.name}}</h1>
					<spacer size="xxs"></spacer>
						<!-- description -->
						<p class="text-big">{{recipe.description}}</p>
					<spacer size="xs"></spacer>
					<!-- picture -->
					<div class="w-full">
						<img
							class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-md"
							:src="recipe.picture"
							:srcset="recipe.pictureSmall +' 164w,'+recipe.pictureMedium+' 428w'"
							alt="">
					</div>
					<spacer size="xs"></spacer>
					<!-- tags -->
					<div class="flex flex-row flex-wrap justify-start items-start  gap-2 ">
						<nuxt-link v-for="t in recipe.tags"
							:key="t.name"
							:to="`/Recettes?q=${t.name}`"
							>
							<tag look="light">{{t.name}}</tag>
						</nuxt-link>
					</div>

				</div>

				<spacer size="md"></spacer>

				<div class="block p-5 rounded-md bg-black-100 w-fit">
					<!-- seasonality (a list of months) -->
					<div class="flex flex-row justify-start items-start text-big gap-2" v-if="recipe.months">
						<p class="font-bold text-pink-100">Saisonnalité:</p>
						<div v-if="recipe.months.length < 12">
							<nuxt-link v-for="month in recipe.months"
								:key="month"
								:to="`/Recettes?months=${month}`"
								>
								<tag look="primary">{{month}}</tag>
							</nuxt-link>
						</div>
						<div v-else>
							<p>{{label('allYearLong')}}</p>
						</div>
					
					</div>
					<!-- prep time and cook time -->
					<div class="flex flex-row justify-start items-center text-big gap-2">
						<p class="font-bold text-pink-100">Temps de préparation:</p>
						<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/> <time>{{(recipe.preparationTime/60)}} min</time>
					</div>
					<div class="flex flex-row justify-start items-center text-big gap-2">
						<p class="font-bold text-pink-100">Temps de cuisson:</p>
						<meta itemprop="cookTime" :content="`PT${(recipe.cookTime/60)}M`"/><time>{{(recipe.cookTime/60)}} min</time>
					</div>
				</div>

				<spacer size="md"></spacer>

				<!-- ingredients -->
				<h2>Ingrédients</h2>
				<spacer size="xs"></spacer>
				<!-- change number of plates -->
				<div class="flex flex-row items-center gap-2 bg-black-300 w-fit border-black-200">
					<button class="title-article border-r-2 border-r-black-200 text-center px-4" @click="(servings > 0) ? servings-- : servings" :disabled="servings == 1">-</button>
					<input 
						class="max-w-[40px] bg-black-300 rounded focus:outline-none focus:ring focus:ring-black-200 block p-2.5 placeholder:text-white-200 text-white-100 title-paragraph text-center"
						type="number" 
						v-model="servings"
						step="1" min="1" max="99"
						>
					<button class="title-article border-l-2 border-l-black-200 text-center px-4" @click="servings++">+</button>
				</div>
				<!-- yield -->
				<!-- rajouter directement le mot "personnes" à la suite du nombre dans l'input -->
				<!-- <p><span itemprop="recipeYield"> Pour {{recipe.yield}}</span> personnes</p> -->
				<!-- list of compositions: quantity / units / ingredient name / remark / optional -->

				<spacer size="sm"></spacer>

				<div v-for="c in recipe.compositions" :key="c.name" class="columns-2">
					<div v-if="c.ingredient[0]">
						<div class="inline-block" v-if="c.quantity > 0">
							<!-- quantity -->
							<span>{{computedQuantity(c.quantity)}}</span>
							<!-- units -->
							<span v-if="c.units != 'pièce'">{{c.units}}</span>
						</div>
						<div class="inline-block">
							<!-- ingredient -->
							<span>{{c.ingredient[0].name}}</span>
							<!-- remark -->
							<i>{{c.remark}}</i> 
							<!-- if no quantity -->
							<span v-if="c.quantity == 0">selon votre goût</span> 
							<!-- optional -->
							<span v-if="c.optional">(facultatif)</span>
						</div>
					</div>
				</div>
				<!-- procedure -->
				<div v-html="procedure"></div>
				<!-- related article -->
				<div v-if="article">
					<hr/>
					<h3>En savoir plus</h3>
					<card-article 
						:img="article.data.cover.url" 
						:imgAlt="article.data.cover.alt" 
						:path="article.url" 
						:title="$prismic.asText(article.data.title)"/>
				</div>
			</div>
	</section>
	</template>

<script>
import {marked} from 'marked'
import queries from '~/plugins/queries'
import labels from '~/plugins/labels'
import { DateTime } from "luxon";
import Tag from '~/molecules/Tag.vue';
import CardArticle from	'~/components/CardArticle.vue';
import Spacer from '~/molecules/Spacer.vue';


export default {
    components: {Tag, CardArticle, Spacer},
    computed:{
        procedure(){
			return (this.recipe.procedure) ? marked(this.recipe.procedure) : ""
        },
        ingredients(){
			return (this.recipe.ingredients) ? marked(this.recipe.ingredients) : ""
        },
		inSeason(){
			let currentMonth = DateTime.now().month;
			if(this.recipe.months){
				return this.recipe.months.includes(currentMonth.toString());
			}
			return false;
		},
		servingsRatio(){
			return this.servings / this.recipe.yield;
        }
    },
    methods:{
		label(key){
			return labels[key];
		},
		computedQuantity(qty){
			return Math.round((qty * this.servingsRatio)*1000)/1000;
		},
		addServings(){
			console.log(this.servings);
			this.servings++;
		}
    },
    async asyncData({ params, error, payload, $axios, $config: { graphqlEndpoint }, $prismic }){
        console.log("params",params)
        if (payload){
        	console.log("payload",payload.name);
			let recipe = payload;
			let article = null;

			if(recipe.compositions){
				recipe.compositions.sort((a,b) => b.quantity - a.quantity);
			}

			//if there's an associated page in Prismic, retrieve it
			if(recipe.prismicPageId){
				//TODO: limit amount of data retrieved (graphQuery and fetch don't work)
				article = (await $prismic.api.getByID(recipe.prismicPageId));
			}

			return { recipe: recipe, servings:recipe.yield, article: article};
        }
        else {
            if(params.id){
				console.log("fetchRecipe", params.id);
				const res = await $axios({
						url: graphqlEndpoint,
						method: "post",
						data: {
							query: queries.getRecipeDetails(params.id),
						},
					})
				if(res.data.data && res.data.data.recettes[0]){
					let recipe = res.data.data && res.data.data.recettes[0];
					console.log(recipe);
					let article = null;

					if(recipe.compositions){
						recipe.compositions.sort((a,b) => b.quantity - a.quantity);
					}

					//if there's an associated page in Prismic, retrieve it
					if(recipe.prismicPageId){
						//TODO: limit amount of data retrieved (graphQuery and fetch don't work)
						article = (await $prismic.api.getByID(recipe.prismicPageId));
					}

					return { recipe: recipe, servings:recipe.yield, article: article};
				}
				else{
					error({ statusCode: 404, message: 'Page not found' })
				}
			}

			error({ statusCode: 404, message: 'Page not found' })
        }
    },
	head () {
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