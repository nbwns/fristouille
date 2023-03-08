<template>
<div class="flex justify-between w-full items-center">  
    <label :for="uid" class="label-checkbox text-usual cursor-pointer select-none">	
		<slot></slot> 
	</label>
	<input :id="uid" type="checkbox" value="" class="checkbox select-none" :checked="checked" @click="$emit('check', $event)">
</div>
	

</template>

<script>
export default{
	props: {
		"checked": Boolean,
		"uid": String
	}
}
</script>

<style>

</style>