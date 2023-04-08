<template>

<div class="card">
	<nuxt-link :to='`/Recette/${slug}/${recipeID}`' no-prefetch>
			<div class="h-40 bg-center bg-cover" :class="width" :style="{backgroundImage: backgroundImage}">			
				<div class="relative">
					<div class="absolute w-full left-0 top-0 flex flex-row justify-between p-2 items-center">
							<tag v-if="tag" look="primary" :title="tag">{{tag}}</tag>
							<tag
								v-if="diet != 'Omnivore'"
								:title="diet" 
								:look="(diet === 'Végétalien' ? 'pink' : (diet === 'Végétarien' ? 'green': ''))">
							<svg class="w-5 h-5 text-white-200" stroke="3" fill="none" viewBox="0 0 25 25"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M15.625 11.524C13.0521 14.2187 10.4781 20.8333 10.4781 20.8333C10.4781 20.8333 6.80104 11.5229 3.125 9.375"
									stroke="currentColor" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
								<path fill-rule="evenodd"
									d="M21.3501 5.80948L21.7939 10.4178C22.0814 13.4074 19.8407 16.0689 16.8512 16.3574C13.9178 16.6386 11.2605 14.4949 10.9782 11.5616C10.911 10.864 10.9818 10.1601 11.1867 9.48994C11.3915 8.81979 11.7263 8.19655 12.1721 7.65583C12.6178 7.1151 13.1657 6.66748 13.7845 6.33853C14.4032 6.00957 15.0807 5.80573 15.7782 5.73864L20.6907 5.26573C20.7697 5.25811 20.8495 5.26614 20.9254 5.28935C21.0013 5.31256 21.0719 5.35049 21.1331 5.40099C21.1943 5.45148 21.245 5.51355 21.2822 5.58364C21.3195 5.65373 21.3425 5.73047 21.3501 5.80948V5.80948Z"
									stroke="currentColor" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</tag>
					</div>
				</div>
			</div>

				<div class="pt-4">
					<h4 class="text-big">{{title}}</h4>
					<!-- <p class="text-small">{{author}}</p> -->
				</div>
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
		'tags': Array,
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