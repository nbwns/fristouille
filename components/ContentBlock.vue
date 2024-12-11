<template>
	<div class="flex flex-grow flex-col"
		:class="{ 'bg-alt font-mono py-5 px-5 rounded-md max-w-[55ch] justify-center items-center mx-auto my-6 lg:my-12': callout }">
		<h2 class=" text-lg lg:text-lg leading-none pb-4 w-full text-pretty ligatures-none" v-if="title"
			:class="[callout ? 'text-primary text-lg lg:text-xl' : 'text-primary-foreground']">{{ title }}
		</h2>
		<div class="">
			<prismic-rich-text :field="content" :class="[
				'leading-snug text-base font-mono ligatures-none prose-fristouille text-balance',
				'prose-p:font-mono prose-p:font-light prose-p:text-base prose-p:leading-snug prose-p:ligatures-none',
				callout ? 'text-primary prose-p:text-primary' : 'text-foreground prose-p:text-foreground'
			]" />
		</div>
		<div v-if="image && image.url" class="flex justify-center items-center py-12 lg:py-24 w-full">
			<prismic-image :field="image" 
				class="rounded-[24px] object-cover w-full lg:w-2/3 aspect-square" />
		</div>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: ["title", "content", "image", "callout"],
	components: {
		Spacer
	}
}
</script>

<style></style>
