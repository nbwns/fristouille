<template>
	<div class="relative shadow w-full rounded overflow-hidden">
		<label for="search-query-input" class="sr-only text-primary-foreground">{{ placeholder }}</label>
		<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
			<svg class="w-5 h-5 text-primary-foreground" aria-hidden="true" fill="none" stroke="currentColor"
				viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
			</svg>
		</div>
		<input type="text" name="q" id="search-query-input"
			class="placeholder:font-mono font-medium block w-full px-3 py-2 pl-10  bg-secondary border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground placeholder:text-sm placeholder:tracking-tight placeholder:ligatures-none"
			:placeholder="placeholder" :required="required" v-model="inputValue" @keyup.enter="$emit('enter')" />
	</div>
</template>

<script>
export default {
	props: {
		placeholder: String,
		required: String
	},
	computed: {
		inputValue: {
			get() {
				return this.$store.state.searchQuery;
			},
			set(value) {
				this.$store.commit('saveSearchQuery', value);
			}
		}
	}
}
</script>

<style></style>