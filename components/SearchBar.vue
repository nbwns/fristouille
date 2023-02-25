<template>
	<form>
		<div class="relative shadow">
			<div class="icon-search">
				<svg aria-hidden="true" fill="none" stroke="currentColor"
					viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
			</div>
			<input type="text"
				class="input-search text-usual"
				:value="value" :placeholder="placeholder" />
		</div>
	</form>
</template>

<script>
export default {
	props: {
		value: String,
		placeholder: String
	}
}
</script>

<style></style>