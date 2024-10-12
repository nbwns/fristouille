<template>
	<div
		class="w-fit rounded-3xl flex justify-start items-center hover:bg-secondary/20 px-4 py-2 transition-all duration-300">
		<button @click="toggleDarkMode" class="flex space-x-2 items-center justify-start w-full cursor-pointer">
			<span class="text-usual select-none">Thème</span>
			<div class="flex items-center">
				<svg v-if="dark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-foreground" viewBox="0 0 20 20"
					fill="currentColor">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
				<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-foreground" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clip-rule="evenodd" />
				</svg>
			</div>
		</button>
	</div>
</template>

<script>
export default {
	computed: {
		dark() {
			return this.$store.state.dark;
		}
	},
	mounted() {
		if (process.client) {
			this.$nextTick(() => {
				const savedState = JSON.parse(localStorage.getItem('vuex') || '{}');
				if (savedState.dark !== undefined) {
					this.$store.commit('toggleDarkMode', savedState.dark);
				} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					this.$store.commit('toggleDarkMode', true);
				}
				// this.applyDarkMode(this.dark);

				// Debug logs
				console.log('Dark mode state:', this.$store.state.dark);
				console.log('localStorage vuex:', localStorage.getItem('vuex'));
				console.log('HTML classes:', document.documentElement.classList);
			});
		}
	},
	methods: {
		toggleDarkMode() {
			if (process.client) {
				const newDarkMode = !this.dark;
				this.$store.commit('toggleDarkMode', newDarkMode);
				this.applyDarkMode(newDarkMode);

				// Debug logs
				console.log('Dark mode state after toggle:', this.$store.state.dark);
				console.log('localStorage vuex after toggle:', localStorage.getItem('vuex'));
				console.log('HTML classes after toggle:', document.documentElement.classList);
			}
		},
		applyDarkMode(isDark) {
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			// Debug logs
			console.log('HTML classes after toggle:', document.documentElement.classList);
		}
	}
};
</script>

<style scoped>
.text-usual {
	@apply text-white-100 dark:text-black-100;
}
</style>