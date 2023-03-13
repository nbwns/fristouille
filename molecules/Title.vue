<template>
  	<h2 :class="{'text-orange-300': accentColor}"
		class="title">
		<slot></slot>
	</h2>
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