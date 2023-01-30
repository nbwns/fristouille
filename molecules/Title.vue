<template>
  	<h1 :class="{'text-coral-200': accentColor}">
		<slot></slot>
	</h1>
</template>

<script>
export default {
	props:{
		accentColor: Boolean
	}
}
</script>

<style>

</style>