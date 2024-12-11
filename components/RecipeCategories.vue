<template>
	<div>
		<content-block :content="content" />
		<div class="leading-snug text-base font-mono ligatures-none prose-fristouille text-balance prose-p:font-mono prose-p:font-light prose-p:text-base prose-p:leading-snug prose-p:ligatures-none text-foreground prose-p:text-foreground">
			<h2 class="title-paragraph">Recettes par ingrédients</h2>
			<ul>
				<li v-for="(i, key) in ingredients" :key="key">
					<nuxt-link :to="`/recettes/${i.name}`" 
					class="text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
						Recette avec {{ i.name }}
					</nuxt-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import ContentBlock from '~/components/ContentBlock';

export default {
	props:["content", "ingredients"],
	components:{
		ContentBlock,
	}
}
</script>

<style>

</style>