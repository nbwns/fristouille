<template>
	<div class="container mx-auto">
		<h1 v-if="recipe" class="text-3xl">{{recipe.name}}</h1>
		<p v-if="inSeason" class="rounded-3xl bg-red-300 border-green-500 border-2 p-1">C'est de saison !</p>
		<div>Saisonnalité: 
			<div v-if="recipe.months.length < 12">
				<span v-for="month in recipe.months" class="p-1" :key="month">{{getMonthLabel(month)}}</span>
			</div>
			<div v-else>
				{{label('allYearLong')}}
			</div>
		</div>
        <p>{{recipe.description}}</p>
        <div>
            <img :src="recipe.picture"
                :srcset="recipe.pictureSmall +' 164w,'+recipe.pictureMedium+' 428w'"
                sizes="428px"
                alt="">
        </div>
        <small class="rounded-3xl bg-green-300 border-green-500 border-2 p-1">{{recipe.diet}}</small>
        <p>Temps de préparation: <meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/> <time>{{(recipe.preparationTime/60)}}</time></p>
        <p>Temps de cuisson: <meta itemprop="cookTime" :content="`PT${(recipe.cookTime/60)}M`"/><time>{{(recipe.cookTime/60)}}</time></p>
        <p>Nombre de couverts: <span itemprop="recipeYield">{{recipe.yield}}</span> </p>
        <div v-html="procedure"></div>
        <div v-html="ingredients"></div>
        <div>Tags:<small v-for="t in recipe.tags" :key="t.name">{{t.name}}</small></div>

		<div v-for="c in recipe.compositions" :key="c.name" class="columns-2">
			<div class="inline-block">
				<span>{{c.quantity}}</span>
				<span>{{c.units}}</span>
			</div>
			<div class="inline-block font-semibold">{{c.ingredient[0].name}}</div>
		</div>
    </div>
</template>

<script>
import {marked} from 'marked'
import queries from '~/plugins/queries'
import labels from '~/plugins/labels'
import { DateTime } from "luxon";
export default {
    data () {
        return {
            recipe: null
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
			console.log(this.recipe.months);
			if(this.recipe.months){
				return this.recipe.months.includes(currentMonth.toString());
			}
			return false;
		}
    },
    methods:{
        getMonthLabel(index){
			return labels.months[index-1];
		},
		label(key){
			return labels[key];
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
					console.log("recipe", res.data.data.recettes[0])
					return { recipe: res.data.data.recettes[0] }
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
                    content: `http://www.fristouille.org/${this.recipe.slug}/${this.recipe.recipeId}` 
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

<style>

</style>