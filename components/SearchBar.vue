<template>
	<div class="relative shadow">
		<label for="search-query-input" class="sr-only">{{placeholder}}</label>
		<div class="icon-search">
			<svg aria-hidden="true" fill="none" stroke="currentColor"
				viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
			</svg>
		</div>
		<input type="text" name="q" id="search-query-input"
			class="input-search text-usual"
			:value="value" :placeholder="placeholder" @input="$emit('update:value', $event.target.value)" :required="required" />
	</div>
</template>

<script>
export default {
	props: {
		value: String,
		placeholder: String,
		required: String
	}
}
</script>

<style></style>