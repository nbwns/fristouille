<template>
	<div class="flex flex-grow flex-col"
		:class="{ 'bg-alt font-mono py-5 px-5 rounded-md max-w-[55ch] justify-center items-center mx-auto my-6 lg:my-12': callout }">
		<h2 class=" text-lg lg:text-lg leading-none pb-4 w-full text-pretty ligatures-none" v-if="title"
			:class="[callout ? 'text-primary text-lg lg:text-xl lowercase' : 'text-primary-foreground lowercase']">{{ title }}
		</h2>
		<div class="">
			<prismic-rich-text :field="content" :class="[
				' text-base font-mono ligatures-none prose-fristouille text-pretty',
				'prose-p:font-mono prose-p:font-light prose-p:text-base  prose-p:ligatures-none prose-p:text-pretty prose-p:pb-2',
				'prose-ul:font-mono prose-ul:font-light prose-ul:text-base prose-ul:text-pretty prose-ul:pb-2 ',
				'prose-ol:font-mono prose-ol:font-light prose-ol:text-base prose-ol:text-pretty prose-ol:pb-2 prose-li:pb-2' ,
				'prose-h1:mb-2 prose-h2:mb-2 prose-p:mb-1 prose-ul:mb-1',
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
