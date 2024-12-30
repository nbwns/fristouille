<template>
	<section class="flex w-full items-center mx-auto justify-center py-10">
		<div class="w-full flex flex-col space-y-3">
			<!-- title row -->
			<div class="w-full flex flex-row justify-between items-end">
				<title-paragraph>
					l'astuce fristouille
				</title-paragraph>
			</div>
			<!-- responsive panel -->
			<div
				class="flex flex-col md:flex-row w-full rounded-md bg-secondary group border border-primary-foreground/10 hover:border-primary-foreground/20 hover:bg-primary/80 transition-colors duration-300 overflow-hidden">
				<nuxt-link :to="article.url" class="flex flex-col md:flex-row justify-start w-full h-full">
					<!-- Image on the left -->
					<div class="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
						<img class="w-full h-full object-cover" :src="article.data.cover.url" :alt="article.data.cover.alt">
					</div>
					<!-- Content on the right -->
					<div class="flex flex-col justify-between px-6 py-3 w-full">
						<h3 class="text-foreground text-lg leading-tight font-demi line-clamp-2 ligatures-none lowercase">
							{{ $prismic.asText(article.data.title) }}
						</h3>
						<div class="text-sm text-foreground/80 flex-grow font-light pt-3">
							<prismic-rich-text :field="article.data.tip_abstract" v-if="article.data.tip_abstract" />
						</div>
						<div class="flex justify-end pt-2">
							<button
								class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								aria-label="Voir l'astuce">
								Voir l'astuce
							</button>
						</div>
					</div>
					<!-- Mobile fallback content -->
					<!-- <div class="md:hidden flex flex-col justify-between p-3 space-y-4">
						<h3
							class="text-foreground text-lg leading-tight text-pretty max-w-xs font-demi line-clamp-2 ligatures-none">
							{{ $prismic.asText(article.data.title) }}
						</h3>
						<div class="text-sm text-foreground/80 flex-grow font-light">
							<prismic-rich-text :field="article.data.tip_abstract" v-if="article.data.tip_abstract" />
						</div>
					</div> -->
				</nuxt-link>
			</div>
		</div>
	</section>
</template>



<script>
import TitleParagraph from '~/molecules/TitleParagraph.vue';

export default {
	props: ['article'],
	components: { TitleParagraph }
}
</script>

<style></style>