<template>
    <div class="flex flex-row justify-center items-center w-full space-x-2">
		<div class="md:hidden">
			<button @click="shareContent" class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
				<span
					class="text-sm select-none text-primary-foreground group-hover:text-primary-foreground transition-colors duration-300 lowercase">partager&nbsp;</span>
				<span 
				class="flex items-center">
					<svg 
					class="h-6 w-6 text-alt group-hover:text-primary-foreground transition-colors duration-300"
					width="23" height="26" viewBox="0 0 23 26" fill="currentColor" 
					xmlns="http://www.w3.org/2000/svg">
						<path d="M19.25 25.5C18.2083 25.5 17.3229 25.1354 16.5938 24.4062C15.8646 23.6771 15.5 22.7917 15.5 21.75C15.5 21.625 15.5312 21.3333 15.5937 20.875L6.8125 15.75C6.47917 16.0625 6.09375 16.3075 5.65625 16.485C5.21875 16.6625 4.75 16.7508 4.25 16.75C3.20833 16.75 2.32292 16.3854 1.59375 15.6562C0.864583 14.9271 0.5 14.0417 0.5 13C0.5 11.9583 0.864583 11.0729 1.59375 10.3438C2.32292 9.61458 3.20833 9.25 4.25 9.25C4.75 9.25 5.21875 9.33875 5.65625 9.51625C6.09375 9.69375 6.47917 9.93833 6.8125 10.25L15.5937 5.125C15.5521 4.97917 15.5262 4.83875 15.5162 4.70375C15.5062 4.56875 15.5008 4.4175 15.5 4.25C15.5 3.20833 15.8646 2.32292 16.5938 1.59375C17.3229 0.864583 18.2083 0.5 19.25 0.5C20.2917 0.5 21.1771 0.864583 21.9062 1.59375C22.6354 2.32292 23 3.20833 23 4.25C23 5.29167 22.6354 6.17708 21.9062 6.90625C21.1771 7.63542 20.2917 8 19.25 8C18.75 8 18.2812 7.91125 17.8438 7.73375C17.4063 7.55625 17.0208 7.31167 16.6875 7L7.90625 12.125C7.94792 12.2708 7.97417 12.4117 7.985 12.5475C7.99583 12.6833 8.00083 12.8342 8 13C7.99917 13.1658 7.99417 13.3171 7.985 13.4537C7.97583 13.5904 7.94958 13.7308 7.90625 13.875L16.6875 19C17.0208 18.6875 17.4063 18.4429 17.8438 18.2662C18.2812 18.0896 18.75 18.0008 19.25 18C20.2917 18 21.1771 18.3646 21.9062 19.0938C22.6354 19.8229 23 20.7083 23 21.75C23 22.7917 22.6354 23.6771 21.9062 24.4062C21.1771 25.1354 20.2917 25.5 19.25 25.5Z"/>
					</svg>
				</span>
			</button>
		</div>
		<div>
			<a :href="`https://www.pinterest.com/pin/create/button/?url=${this.fullPath}&description=${this.name}`" target="_blank" class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
				<span
					class="text-sm select-none text-primary-foreground group-hover:text-primary-foreground transition-colors duration-300 lowercase">épingler&nbsp;</span>
				<span class="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-alt group-hover:text-primary-foreground transition-colors duration-300"
					viewBox="0 0 500 500" fill="currentColor">
						<path d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39 c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651 c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353 c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434 c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121 c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122 c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092 c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713 c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189 c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"></path>
					</svg>
				</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['name'],
	computed:{
		fullPath(){
			return `${this.$config.baseUrl}${this.$nuxt.$route.path}`;
		}
	},
	methods: {
		shareContent() {
			this.$plausible.trackEvent("Share Click");
			let data = {
					title: this.name,
					text:  `${this.name} - Fristouille`,
					url: this.fullPath
				};

			if (navigator.share) {
				navigator.share(data)
				.then(() => {
				console.log('Sharing successful');
				})
				.catch((error) => {
				console.error('Sharing failed:', error);
				});
			} else {
			console.log('Web Share API not supported', data);
			}
		}
	}
}
</script>

<style>

</style>