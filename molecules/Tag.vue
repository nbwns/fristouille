<template>
	<div 
		:class="classObject"
		class="py-1 px-3 uppercase tracking-wider text-white-300 text-xs font-medium rounded-3xl">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:{
		look: String
	},
	computed: {
		classObject() {
			console.log(this.look);
			return {
				'bg-gum-300': this.look === 'gum',
				'bg-mint-300': this.look === 'mint',
				'bg-purple-300': this.look === 'purple'
			}
		}
	}
}
</script>

<style>

</style>