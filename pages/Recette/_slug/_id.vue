<template>
		<section class="flex flex-col justify-center layer__xl mx-auto">
			<spacer size="md"></spacer>	
			<div v-if="recipe">
				<div class="items-start justify-start mx-auto">
					<!-- picture -->
					<!-- TODO: check correct sizes for viewports -->
					<div class="w-full">
						<nuxt-img v-if="recipe.picture"
							class="object-cover max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 w-full rounded-md"
							fit="cover"
							:src="recipe.picture"
							quality="80"
							sizes="sm:100vw md:50vw lg:960px"
							placeholder
							:alt="`Photo d'un plat de ${recipe.name}`" />
						
					</div>
					<spacer size="xs"></spacer>
					<p class="text-white-300 text-usual mb-3">
						{{recipe.authorName[0]}}
					</p>	
					<!-- title -->
					<h1>{{recipe.name}}</h1>
					<spacer size="xs"></spacer>
						<div class="flex flex-col md:flex-row justify-between w-full">
							<!-- description -->
							<div class="flex flex-col md:w-2/3">
								<p class="text-big ">{{recipe.description}}</p>
								
	
							</div>
							<!-- <svg class="w-64" viewBox="0 0 152 141" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M106.445 56.5139C106.445 56.5139 94.2322 42.1628 102.388 27.6228C110.544 13.0829 119.255 13.1676 121.21 7.18088C121.21 7.18088 132.474 17.2715 127.204 32.0118C121.934 46.7521 111.418 50.9282 106.445 56.5139Z" fill="url(#paint0_linear_1013_1558)"/>
							<path d="M95.4306 36.451C95.4306 36.451 109.444 37.7419 114.463 26.3062C119.482 14.8705 115.536 9.50035 118.23 5.6626C118.23 5.6626 107.18 3.09299 100.751 12.8251C94.3226 22.5571 96.5357 30.9155 95.4306 36.451Z" fill="url(#paint1_linear_1013_1558)"/>
							<path d="M99.8466 42.8741C99.8466 42.8741 112.044 35.7481 109.681 23.4598C107.317 11.1715 101.05 9.08063 101.083 4.36738C101.083 4.36738 90.5865 8.71685 90.8325 20.4342C91.0785 32.1516 97.6189 37.699 99.8466 42.8741Z" fill="url(#paint2_linear_1013_1558)"/>
							<path d="M100.931 45.7691C105.544 53.8233 105.544 67.7632 106.467 71.1708C107.389 74.5783 109.234 72.4099 109.234 72.4099C109.234 72.4099 105.544 49.4864 105.544 45.7691C105.544 41.1225 100.931 37.0954 97.8562 28.1119C94.781 19.1284 97.8562 9.52533 92.3209 9.21555C86.7856 8.90577 85.2481 18.5088 87.7082 28.1119C89.6763 35.7943 96.3186 37.715 100.931 45.7691Z" fill="url(#paint3_linear_1013_1558)"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8795 86.1125C8.45014 81.7368 -1.23806 71.2593 1.24029 62.7105C3.71863 54.1617 17.425 50.7788 31.8544 55.1545C45.391 59.2596 54.755 68.7347 53.8156 76.9496L80.4099 85.4702C81.3077 85.7578 81.8165 86.7143 81.5531 87.6193C81.2898 88.5243 80.3516 89.0436 79.445 88.7861L52.3451 81.0891C48.1122 87.7334 35.785 90.0262 22.8795 86.1125Z" fill="#FFD69E"/>
							<path d="M100.769 138.115C102.651 136.175 103.568 133.242 103.568 129.316V99.5632H95.4004V128.749C95.4004 130.357 95.125 131.54 94.5285 132.391C93.932 133.242 92.8765 133.621 91.2705 133.621C90.3527 133.621 89.5267 133.526 88.8384 133.337V140.527C90.2151 140.811 91.6376 141 93.1978 141C96.364 141 98.8878 140.054 100.769 138.115Z" fill="black"/>
							<path d="M147.888 123.775C148.238 121.968 148.067 120.237 147.44 118.573C146.822 116.975 145.766 115.577 144.319 114.472C143.206 113.622 141.656 112.735 139.771 111.83L114.257 99.9358L110.857 107.356L136.437 119.24C137.115 119.58 137.736 119.995 138.219 120.364C139.22 121.129 139.757 122.13 139.818 123.303C139.879 124.476 139.513 125.678 138.616 126.89L137.999 127.723L144.267 130.552C144.706 130.117 145.163 129.577 145.611 128.971C146.816 127.342 147.575 125.61 147.888 123.775Z" fill="black"/>
							<ellipse cx="36.5416" cy="37.1204" rx="36.5416" ry="37.1204" transform="matrix(-1 0 0 1 142.093 39.1348)" fill="url(#paint4_linear_1013_1558)"/>
							<path d="M95.0705 70.5C95.0705 71.9157 93.9488 73.0897 92.5211 73.0897C91.0934 73.0897 89.9717 71.9502 89.9717 70.5C89.9717 69.0842 91.0934 67.9102 92.5211 67.9102C93.9488 67.9102 95.0705 69.0842 95.0705 70.5Z" fill="#1D1D1B"/>
							<path d="M115.466 74.2407C117.03 74.2407 118.299 72.9524 118.299 71.3631C118.299 69.7739 117.03 68.4856 115.466 68.4856C113.902 68.4856 112.633 69.7739 112.633 71.3631C112.633 72.9524 113.902 74.2407 115.466 74.2407Z" fill="#1D1D1B"/>
							<path d="M103.801 79.996C101.905 79.996 100.008 79.3204 98.4697 77.9692L99.6147 76.543C101.905 78.5322 105.232 78.6448 107.594 76.8057L108.667 78.307C107.236 79.433 105.519 79.996 103.801 79.996Z" fill="#1D1D1B"/>
							<defs>
							<linearGradient id="paint0_linear_1013_1558" x1="135.859" y1="22.7894" x2="84.515" y2="42.2253" gradientUnits="userSpaceOnUse">
							<stop offset="0.307292" stop-color="#146333"/>
							<stop offset="1" stop-color="#FFD69E"/>
							</linearGradient>
							<linearGradient id="paint1_linear_1013_1558" x1="102.378" y1="3.41066" x2="113.152" y2="43.9605" gradientUnits="userSpaceOnUse">
							<stop offset="0.0572917" stop-color="#00784D"/>
							<stop offset="1" stop-color="#0C9900"/>
							</linearGradient>
							<linearGradient id="paint2_linear_1013_1558" x1="86.8369" y1="11.7805" x2="118.802" y2="38.4264" gradientUnits="userSpaceOnUse">
							<stop offset="0.0572917" stop-color="#066626"/>
							<stop offset="1" stop-color="#66B04C"/>
							</linearGradient>
							<linearGradient id="paint3_linear_1013_1558" x1="97.9035" y1="9.20825" x2="97.9035" y2="73.0899" gradientUnits="userSpaceOnUse">
							<stop stop-color="#048432"/>
							<stop offset="1" stop-color="#FFD69E"/>
							</linearGradient>
							<linearGradient id="paint4_linear_1013_1558" x1="36.5416" y1="0" x2="36.2801" y2="81.2295" gradientUnits="userSpaceOnUse">
							<stop stop-color="#DF46E2"/>
							<stop offset="1" stop-color="#FFF0DC"/>
							</linearGradient>
							</defs>
							</svg> -->
						</div>
				</div>
				<spacer size="md"></spacer>

				<div class="flex w-full justify-between gap-5">
					<!-- prep time and cook time -->
					<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
						<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/>
						<p>Préparation</p>
						<time class="title-paragraph">{{(recipe.preparationTime/60)}} min</time>
					</div>
			
					<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
						<meta itemprop="cookTime" :content="`PT${(recipe.cookTime/60)}M`"/>
						<p>Cuisson</p>
						<time class="title-paragraph">{{(recipe.cookTime/60)}}min</time>
					</div>
			
					
				</div>

				<spacer size="xs"></spacer>

				<div class="flex w-full justify-between gap-5">
					<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
						<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/>
						<p>Difficulté</p>
						<div class="title-paragraph">{{ difficultyText }}</div>
					</div>
			
					<div class="w-full bg-black-100 dark:bg-white-100 py-5 rounded-md text-center">
						<meta itemprop="prepTime" :content="`PT${(recipe.preparationTime/60)}M`"/>
						<p>Prix</p>
						<div class="title-paragraph">{{ priceText }}</div>
					</div>
				</div>

				<spacer size="xs"></spacer>

				<!-- seasonality (a list of months) -->
				<div class="flex flex-row justify-start items-start text-big gap-2" v-if="recipe.months">
					<p class="font-bold text-pink-100 dark:text-black-300">Saisonnalité:</p>
					<div v-if="recipe.months.length < 12" class="flex flex-wrap gap-2">
						<nuxt-link v-for="month in recipe.months"
							:key="month"
							:to="`/Recettes?months=${month}`"
							>
							<tag look="light">{{month}}</tag>
						</nuxt-link>
					</div>
					<div v-else>
						<p>{{label('allYearLong')}}</p>
					</div>					
				</div>

				<spacer size="sm"></spacer>

				<!-- ingredients -->
				<h2>Ingrédients</h2>
				<spacer size="xs"></spacer>
				<!-- change number of plates -->
				<div class="flex flex-row items-center gap-2 bg-black-300 dark:bg-purple-100 00 w-fit border-black-200 dark:border-purple-200 ">
					<button class="title-article border-r-2 border-r-black-200 dark:border-r-purple-200 dark:hover:border-r-purple-200 text-center px-4 dark:hover:bg-purple-200" @click="(servings > 0) ? servings-- : servings" :disabled="servings == 1">-</button>
					<input 
						class="max-w-[40px] bg-black-300 dark:bg-purple-100 rounded focus:outline-none focus:ring focus:ring-black-200 block p-2.5 placeholder:text-white-200 text-white-100 title-paragraph text-center"
						type="number" 
						v-model="servings"
						step="1" min="1" max="99"
						>
					<button class="title-article border-l-2 border-l-black-200 dark:border-l-purple-200 dark:hover:border-l-purple-200 dark:hover:bg-purple-200 text-center px-4" @click="servings++">+</button>
				</div>
				<!-- yield -->
				<!-- rajouter directement le mot "personnes" à la suite du nombre dans l'input -->
				<!-- <p><span itemprop="recipeYield"> Pour {{recipe.yield}}</span> personnes</p> -->
				<!-- list of compositions: quantity / units / ingredient name / remark / optional -->

				<spacer size="xs"></spacer>

				<div v-for="c in recipe.compositions" :key="c.name">
					<div v-if="c.ingredient[0]" class="text-usual font-light flex">
						<div class="font-bold" v-if="c.quantity > 0">
							<!-- quantity -->
							<span class="">{{computedQuantity(c.quantity)}}&nbsp;</span>
							<!-- units -->
							<span v-if="c.units != 'pièce'">{{c.units}} <span class="font-light">de &nbsp;</span> </span>
						</div>
						<div class="">
							<!-- ingredient -->
							<span class="text-pink-100 dark:text-black-300 ">{{c.ingredient[0].name}}</span>
							<!-- remark -->
							<i>{{c.remark}}</i> 
							<!-- if no quantity -->
							<span v-if="c.quantity == 0">selon votre goût</span> 
							<!-- optional -->
							<span v-if="c.optional">(facultatif)</span>
						</div>
					</div>
				</div>

				<spacer size="sm"></spacer>

				<!-- procedure -->
				<h2>Procédure</h2>
				<div v-html="procedure" class="text-big"></div>

				<spacer size="sm"></spacer>

				<h2>Tags</h2>
				<!-- tags -->
				<div class="flex flex-row flex-wrap justify-start items-start  gap-2">
					<!-- tags -->
					<nuxt-link v-for="t in recipe.tags"
						:key="t.name"
						:to="`/Recettes?q=${t.name}`"
						>
						<tag look="light">{{t.name}}</tag>
					</nuxt-link>

					<!-- base recipe -->
					<nuxt-link v-if="recipe.baseRecipe" key="baseRecipe"
						:to="`/Recettes?baseRecipe=${recipe.baseRecipe}`"
						>
						<tag look="light" class="lowercase">{{recipe.baseRecipe.replaceAll('-',' ')}}</tag>
					</nuxt-link>
					
					<!-- category -->
					<nuxt-link v-for="cat in recipe.category" :key="cat"
						:to="`/Recettes?category=${cat}`"
						>
						<tag look="light" class="lowercase">{{cat}}</tag>
					</nuxt-link>

					<!-- cuisine -->
					<nuxt-link v-if="recipe.cuisine" key="cuisine"
						:to="`/Recettes?cuisine=${recipe.cuisine}`"
						>
						<tag look="light" class="lowercase">{{recipe.cuisine}}</tag>
					</nuxt-link>

					<!-- allergies -->
					<nuxt-link v-for="free in recipe.free" :key="free"
						:to="`/Recettes?free=${free}`"
						>
						<tag look="light" class="lowercase">sans {{free}}</tag>
					</nuxt-link>

					
				</div>

				<spacer size="sm"></spacer>

				<!-- related article -->
				<div v-if="article" class="w-fit">
					<h3 class="title">En savoir plus</h3>
					<card-article 
						:img="article.data.cover.url" 
						:imgAlt="article.data.cover.alt" 
						:path="article.url" 
						:title="$prismic.asText(article.data.title)"/>
				</div>
				<spacer size="lg"></spacer>

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
        },
		difficultyText(){
			switch(this.recipe.difficulty){
				case 1:
					return 'Facile';
				case 2: 
					return 'Moyenne';
				case 3:
					return 'Difficile';
					
			}
		},
		priceText(){
			switch(this.recipe.price){
				case '€':
					return 'Bon marché';
				case '€€': 
					return 'Abordable';
				case '€€€':
					return 'On se fait plaisir';
					
			}
		}
    },
    methods:{
		label(key){
			return labels[key];
		},
		computedQuantity(qty){
			return Math.round((qty * this.servingsRatio)*2)/2;
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