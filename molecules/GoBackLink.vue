<template>
	<div>
	<NuxtLink :to="path" v-if="visible" class="font-mono text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200">
		&lt;&nbsp;retour 
	</NuxtLink>
	</div>
	
  </template>
  
  <script>
  export default {
	props:["startsWith"],
	data() {
	  return {
		path: null,
		visible: true
	  };
	},
	created() {
	  if (this.$nuxt?.context?.from?.path){
		this.path = this.$nuxt.context.from.path;
		// if (this.startsWith != "" && this.path.toString().toLower().startsWith(this.startsWith.toLower)){
		// 	this.visible = false;
		// }
	  } 
	},
  };
  </script>