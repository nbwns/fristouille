<template>
  	<h1 :class="classValue"
		class="big-title">
		<slot></slot> 
		<span class="text-orange-300" v-if="emphasis">{{emphasis}}</span>
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