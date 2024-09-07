<template>

	<div class="card-recipe h-full border border-purple-300/10 overflow-clip">
		<nuxt-link class="flex flex-col justify-start h-full" :to='`/Recette/${slug}/${recipeID}`' no-prefetch>
			<div class=" bg-center bg-cover h-[37rem]" :class="width" :style="{ backgroundImage: backgroundImage }" />
			<div class="flex flex-col justify-between p-3 space-y-4 h-full ">
				<h4 class="text-usual font-demi ">
					{{ title }}
				</h4>
				<div class="flex flex-col space-y-2 ">
					<div class=" w-full flex flex-row flex-wrap justify-start items-center space-x-2">
						<tag class="text-sm bg-purple-200 dark:bg-purple-200/20 text-white dark:text-black-300 tracking-normal"
							:title="tag">{{ totalTime }}
							min</tag>
						<tag class="text-sm bg-purple-200 dark:bg-purple-200/20 text-white dark:text-black-300 tracking-normal"
							:title="diet"> {{ diet }}
						</tag>
					</div>
				</div>
			</div>
		</nuxt-link>
	</div>

</template>

<script>
import Tag from '~/molecules/Tag.vue';

export default {
	props: ['slug', 'recipeID', 'img', 'diet', 'title', 'totalTime', 'author', 'width'],
	components: { Tag },
	computed: {
		backgroundImage() {
			if (this.img) {
				return 'url(' + this.img + ')';
			}
			else {
				return 'url(/nopicture.png)';
			}
		},
		tag() {
			if (this.tags && this.tags.length > 0) {
				return this.tags[0];
			}
			else {
				return '';
			}
		}
	}
}
</script>