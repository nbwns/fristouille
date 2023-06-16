<template>
    <div class="flex space-x-2">
		<button @click="toggleDarkMode"  class="
		text-white-300 hover:text-orange-200
		dark:text-purple-300 dark:hover:text-purple-100
		focus-visible:ring-2 focus-visible:ring-pink-300
		rounded-lg inline-flex
		">
			<span>Thème</span>
			<svg
				v-if="dark"
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
				d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
				/>
			</svg>
			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
				fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
  </template>
  
  <script>
  export default {
    computed: {
	  dark(){
		return this.$store.state.dark;
	  }
    },

    mounted() {
      console.log("match media", window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (localStorage.theme === undefined) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				//there's been an inversion, the dark mode css is the default, so the "light"
				localStorage.theme = 'light';
			
			} else {
				localStorage.theme = 'dark';
				//there's been an inversion, the light mode css is not the default, so the "dark"
				this.$store.commit('toggleDarkMode', true);
			}
     	} 
		else {
			this.$store.commit('toggleDarkMode', localStorage.theme === 'dark');
      	}
    },
    methods: {
      toggleDarkMode() {
		this.$store.commit('toggleDarkMode', !this.dark);
        localStorage.theme = this.dark ? 'dark' : 'light';
      }
    }
  };
</script>