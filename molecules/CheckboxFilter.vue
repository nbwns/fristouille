<template>
	<div
		class="flex justify-between items-center hover:bg-black-300/20 px-4 py-2 hover:pl-6 transition-all duration-150 w-full md:w-64">
		<label :for="uid" class="label-checkbox text-usual cursor-pointer select-none w-auto flex-1">
			<slot></slot>
		</label>
		<input :id="uid" type="checkbox" value="" class="checkbox select-none" :checked="checked"
			@click="$emit('check', $event)">
	</div>


</template>

<script>
export default {
	props: {
		"checked": Boolean,
		"uid": String
	}
}
</script>

<style></style>