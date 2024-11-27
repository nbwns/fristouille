<template>
	<button @click="$emit('click', $event)" 
		class="flex items-center py-1 px-2 rounded-[999px] max-w-fit w-max bg-label text-primary font-mono font-medium text-xs h-10">
		<slot></slot>
	</button>
</template>

<script>
export default {
	
}
</script>

<style></style>