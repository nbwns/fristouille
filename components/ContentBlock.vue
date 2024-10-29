<template>
	<div class="flex flex-grow flex-col" :class="{ 'bg-alt font-mono py-5 px-5 rounded-md max-w-[55ch]': callout }">
		<h3 class=" text-lg lg:text-lg leading-none pb-4 w-full lg:w-3/4 text-pretty"
			:class="[callout ? 'text-primary text-lg lg:text-xl' : 'text-primary-foreground']">{{ title }}
		</h3>
		<div class="">
			<prismic-rich-text :field="content" :class="[
				'leading-tight text-base font-sans ligatures-none prose-fristouille text-balance',
				'prose-p:font-sans prose-p:font-light prose-p:text-base prose-p:leading-tight prose-p:ligatures-none',
				callout ? 'text-primary prose-p:text-primary' : 'text-foreground prose-p:text-foreground'
			]" />
		</div>
		<div v-if="image.url" class="flex justify-center items-center py-24 w-full">
			<prismic-image :field="image" widths="thumbnails" class="rounded-[24px] object-cover w-2/3 aspect-square" />
		</div>
	</div>
</template>

<script>
import Spacer from '~/molecules/Spacer.vue';

export default {
	props: {
		title: {
			type: String,
			required: true
		},
		content: {
			type: Object,
			required: true
		},
		image: {
			type: Object,
			default: () => ({})
		},
		callout: {
			type: Boolean,
			default: false
		}
	},
	components: {
		Spacer
	}
}
</script>

<style></style>
