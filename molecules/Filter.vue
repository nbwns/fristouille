<template>
	<div @click="$emit('click', $event)"
		:title="title"
		class="filter">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:{
		title: String
	},
}
</script>

<style>

</style>