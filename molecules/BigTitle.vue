<template>
  	<h1 :class="classValue"
		class="h1 text-white-200 pb-3">
		<slot></slot> 
		<span class="text-coral-200" v-if="emphasis">{{emphasis}}</span>
	</h1>
</template>

<script>
export default {
	props:{
		emphasis: String,
		size: Number
	},
	computed: {
		classValue(){
			if(!this.size){
				this.size = 4;
			}
			return `text-${this.size}xl`
		}
	}
}
</script>

<style>

</style>