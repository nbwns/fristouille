<template>
	<h1 :class="classValue"
		class="font-sans text-primary-foreground text-2xl md:text-3xl lg:text-4xl font-medium leading-none lowercase">
		<slot></slot>
		<span class="text-accent" v-if="emphasis">{{ emphasis }}</span>
	</h1>
</template>

<script>
export default {
	props: {
		emphasis: String,
		size: Number
	},
	computed: {
		classValue() {
			if (!this.size) {
				return `text-4xl`
			}
			return `text-${this.size}xl`
		}
	}
}
</script>

<style></style>