<template>
	<div @click="$emit('click', $event)" :class="classObject" :title="title"
		class="flex items-center py-1 px-1.5 rounded-3xl max-w-fit w-max bg-label text-primary font-mono font-medium text-xs">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		look: String,
		title: String
	},
	computed: {
		classObject() {
			return {
				'vegan': this.look === 'pink',
				'vegetarian': this.look === 'green',
				'meat': this.look === 'red',
				'default': this.look === 'primary',
				'light': this.look === 'light'
			}
		}
	}
}
</script>

<style></style>