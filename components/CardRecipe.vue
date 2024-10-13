<template>

	<div
		class="flex flex-col flex-grow justify-between w-full rounded-md bg-secondary h-full max-h-80 group border border-primary-foreground/10 hover:border-primary-foreground/60 overflow-clip hover:bg-primary/80 transition-colors duration-300">
		<nuxt-link class="flex flex-col justify-start h-full" :to='`/Recette/${slug}/${recipeID}`' no-prefetch>
			<div class=" bg-center bg-cover h-[37rem]" :class="width" :style="{ backgroundImage: backgroundImage }" />
			<div class="flex flex-col justify-between p-3 space-y-4 h-full ">
				<h4
					class="text-primary-foreground text-lg leading-tight text-pretty sm:text-balance max-w-xs font-demi line-clamp-2">
					{{ title }}
				</h4>
				<div class="flex flex-col space-y-2 ">
					<div class=" w-full flex flex-row flex-wrap justify-start items-center space-x-2">
						<tag
							class="text-sm bg-label group-hover:bg-secondary text-primary group-hover:text-primary-foreground group-hover:border group-hover:border-primary-foreground/60 tracking-normal"
							:title="tag">
							{{ totalTime }}
							min</tag>
						<tag
							class="text-sm bg-label group-hover:bg-secondary text-primary group-hover:text-primary-foreground group-hover:border group-hover:border-primary-foreground/60 tracking-normal"
							:title="diet">
							{{ diet }}
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