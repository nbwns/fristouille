<template>
	<div @click="$emit('click', $event)"
		:class="classObject"
		:title="title"
		class="tag">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:{
		look: String,
		title: String
	},
	computed: {
		classObject() {
			return {
				'vegan': this.look === 'pink',
				'vegetarian': this.look === 'green',
				'meat': this.look === 'red',
				'default': this.look === 'primary'
			}
		}
	}
}
</script>

<style>

</style>