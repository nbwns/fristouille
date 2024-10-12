<template>
	<div @click="$emit('click', $event)" :title="title"
		class="text-base px-2.5 py-2 border border-secondary-foreground/10 bg-secondary text-primary-foreground  hover:bg-accent transition-colors duration-300  rounded focus:ring-inset focus:ring-2 focus:ring-primary-foreground">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	},
}
</script>

<style></style>