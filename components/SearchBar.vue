<template>
	<div>
		<input type="search" 
			class="bg-reglisse-300 rounded focus:outline-none focus:ring focus:ring-reglisse-200  block w-full pl-10 p-2.5 placeholder:text-white-200 text-white-100"
			:value="value"
			:placeholder="placeholder"/> 
		<button>
			<!-- search icon -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			</svg>
		</button>
	</div>
 
</template>

<script>
export default {
	props: {
		value: String,
		placeholder: String
	}
}
</script>

<style>

</style>