<template>
	<div>
		<section>
			<div>
				<!-- picture -->
				<img 
					:src="recipe.picture"
					:srcset="recipe.pictureSmall +' 164w,'+recipe.pictureMedium+' 428w'"
					sizes="428px"
					alt="">
				<!-- tags -->
				<div class="">
					<div class="flex flex-row p-2 items-center">
						<div class="bg-mint-300 py-1 px-3 uppercase tracking-wider text-white-300 text-xs font-medium rounded-3xl" 
							v-for="t in recipe.tags" :key="t.name">{{t.name}}</div>
						<diet-tag :diet="recipe.diet"/>
					</div>
				</div>
				<!-- author -->
				<!-- <p>
					auteur
				</p> -->
				<!-- title -->
				<h1 v-if="recipe">{{recipe.name}}</h1>
				<!-- description -->
		        <p>{{recipe.description}}</p>
				<!-- seasonality, to add in the design -->
				<div>Saisonnalité: 
					<div v-if="recipe.months.length < 12">
						<span v-for="month in recipe.months" class="p-1" :key="month">{{getMonthLabel(month)}}</span>
					</div>
					<div v-else>
						{{label('allYearLong')}}
					</div>
				</div>
				<!-- prep time and cook time -->
				<p>Temps de préparation: <meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/> <time>{{(recipe.preparationTime/60)}}</time></p>
        		<p>Temps de cuisson: <meta itemprop="cookTime" :content="`PT${(recipe.cookTime/60)}M`"/><time>{{(recipe.cookTime/60)}}</time></p>
				<!-- ingredients -->
				<h2>Ingrédients</h2>
		        <div class="inline-block">
					<input 
						class="max-w-[40px] bg-reglisse-300 rounded focus:outline-none focus:ring focus:ring-reglisse-200 block p-2.5 placeholder:text-white-200 text-white-100"
						type="number" 
						v-model="servings"
						step="1" min="1" max="99">
					<button @click="(servings > 0) ? servings-- : servings" :disabled="servings == 1">-</button>
					<button @click="servings++">+</button>
				</div>
				<p><span itemprop="recipeYield">{{recipe.yield}}</span> couverts</p>
				<div v-for="c in recipe.compositions" :key="c.name" class="columns-2">
					<div class="inline-block" v-if="c.quantity > 0">
						<span>{{computedQuantity(c.quantity)}}</span>
						<span>{{c.units}}</span>
					</div>
					<div class="inline-block">{{c.ingredient[0].name}}</div>
				</div>
				<!-- procedure -->
				<!-- TODO: ol must have numbers -->
				<div v-html="procedure"></div>
			</div>
			</section>
    </div>
</template>

<script>
import {marked} from 'marked'
import queries from '~/plugins/queries'
import labels from '~/plugins/labels'
import { DateTime } from "luxon";
import DietTag from '~/components/DietTag.vue';

export default {
    components: {DietTag},
	data () {
        return {
            recipe: null,
			servings: 0
        }
    },
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
        getMonthLabel(index){
			return labels.months[index-1];
		},
		label(key){
			return labels[key];
		},
		computedQuantity(qty){
			return Math.round((qty * this.servingsRatio)*1000)/1000;
		}
    },
    async asyncData({ params, error, payload, $axios, $config: { graphqlEndpoint } }){
        console.log("payload",payload);
        console.log("params",params)
        if (payload){
            return { recipe: payload };
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
					recipe.compositions.sort((a,b) => b.quantity - a.quantity);
					return { recipe: recipe, servings:recipe.yield};
				}
				else{
					error({ statusCode: 404, message: 'Page not found' })
				}
			}

			error({ statusCode: 404, message: 'Page not found' })
        }
    },
    head() {
        return {
            title: this.recipe.name,
            meta: [
                {
                    hid: `description`,
                    name: 'description',
                    content: this.recipe.description
                },
                {
                    hid: `og:title`,
                    property: 'og:title',
                    content: this.recipe.name
                },
                {
                    hid: `og:url`,
                    property: 'og:url',
                    content: `https://www.fristouille.org/${this.recipe.slug}/${this.recipe.recipeId}` 
                },
                {
                    hid: `og:image`,
                    property: 'og:image',
                    content: this.recipe.pictureMedium
                },
                {
                    hid: `og:description`,
                    property: 'og:description',
                    content: this.recipe.description
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