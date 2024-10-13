<template>
	<div @click="$emit('click', $event)" :title="title"
		class="text-sm font-medium px-2.5 py-2 bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap font-mono ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
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