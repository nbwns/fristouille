<template>

<div class="card h-full">
	<nuxt-link :to='`/Recette/${slug}/${recipeID}`' no-prefetch>
		<div class="flex-1">
			<div class="h-40 bg-center bg-cover" :class="width" :style="{backgroundImage: backgroundImage}">
				<div class="relative">
					<div class="absolute w-full left-0 top-0 flex flex-row justify-between p-2 items-center">
						<tag look="primary" :title="tag">{{totalTime}} min</tag>
						<tag
							v-if="diet != 'Omnivore'"
							:title="diet"
							:look="(diet === 'Végétalien' ? 'pink' : (diet === 'Végétarien' ? 'green': ''))">
							{{ diet }}
						</tag>
					</div>
				</div>
			</div>
		</div>
		<div class="p-3">
			<h4 class="text-usual font-demi ">
				{{title}}
			</h4>
		</div>
		<p class="text-small p-3">
			{{author}}
		</p>
	</nuxt-link>
</div>

</template>

<script>
import Tag from '~/molecules/Tag.vue';

export default {
	props:{
		'slug': String,
		'recipeID': String,
		'img': String,
		'diet': String,
		'title': String,
		'totalTime': String,
		'author': String,
		'width': String,
	},
	components: {Tag},
	computed:{
		backgroundImage(){
			if(this.img){
				return 'url(' + this.img + ')';
			}
			else{
				return '';
			}
		},
		tag(){
			if(this.tags && this.tags.length > 0){
				return this.tags[0];
			}
			else{
				return '';
			}
		}
	}
}
</script>