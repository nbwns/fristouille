<template>
	<div 
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
				'omnivore': this.look === 'pink',
				'vegetarian': this.look === 'green',
				'meat': this.look === 'red'
			}
		}
	}
}
</script>

<style>

</style>