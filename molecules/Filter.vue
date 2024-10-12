<template>
	<div @click="$emit('click', $event)" :title="title"
		class="border border-secondary-foreground/10 bg-secondary text-primary-foreground dark:text-primary-foreground dark:bg-secondary dark:hover:bg-accent dark:hover:!text-primary hover:bg-accent transition-colors duration-300 px-1.5 py-1 rounded focus:ring-inset focus:ring-2 focus:ring-primary-foreground">
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