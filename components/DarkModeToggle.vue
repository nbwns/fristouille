<template>
	<div
		class="w-fit rounded-3xl flex justify-start items-center hover:bg-black-300/20 px-4 py-2 transition-all duration-150">
		<button @click="toggleDarkMode" class="flex space-x-2 items-center justify-start w-full cursor-pointer">
			<span class="text-usual select-none">Thème</span>
			<div class="flex items-center">
				<svg v-if="dark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white-100 dark:text-black-100"
					viewBox="0 0 20 20" fill="currentColor">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
				<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white-100 dark:text-black-100"
					viewBox="0 0 20 20" fill="currentColor">
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
	created() {
		console.log('Created hook called');
	},

	mounted() {
		alert('DarkModeToggle component mounted');
		console.log('Mounted hook called');
		try {
			console.log('localStorage access:', localStorage !== undefined);
			if (localStorage.theme === undefined) {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					localStorage.theme = 'light';
				} else {
					localStorage.theme = 'dark';
					this.$store.commit('toggleDarkMode', true);
				}
			} else {
				this.$store.commit('toggleDarkMode', localStorage.theme === 'dark');
			}
			console.log('Mounted hook completed successfully');
		} catch (error) {
			console.error('Error in mounted hook:', error);
		}
	},

	methods: {
		toggleDarkMode() {
			try {
				const newDarkMode = !this.dark;
				this.$store.commit('toggleDarkMode', newDarkMode);
				console.log('Dark mode after toggle:', this.$store.state.dark);
				if (process.client) {
					localStorage.theme = newDarkMode ? 'dark' : 'light';
					if (newDarkMode) {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				}
			} catch (error) {
				console.error('Error in toggleDarkMode:', error);
			}
		}
	}
};
</script>

<style scoped>
.text-usual {
	@apply text-white-100 dark:text-black-100;
}
</style>