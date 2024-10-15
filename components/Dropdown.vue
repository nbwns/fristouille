<template>
	<div class="relative flex justify-between">
		<button @click.prevent="toggle" id="menu-button" type="button" class="w-full py-4" aria-expanded="true"
			aria-haspopup="true">
			<div class="flex flex-row justify-center items-center group">
				<div
					class="text-lg text-primary-foreground group-hover:text-accent font-sans font-medium ligatures-none transition-all duration-300 z-10">
					{{ title }}
				</div>
				<span class="relative">
					<span v-if="numberOfItemsSelected > 0"
						class="absolute -top-[18px] -right-4 text-primary-foreground bg-secondary group-hover:bg-secondary/10 rounded-[300px] border border-primary-foreground/10 group-hover:border-primary-foreground/60 w-5 h-5 flex items-center justify-center text-xs shadow">
						{{ numberOfItemsSelected }}
					</span>
				</span>
				<svg class="w-6 h-6 fill-primary-foreground group-hover:fill-accent transition-all duration-300 z-10 pt-1"
					stroke-width="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
					<path fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd" />
				</svg>
			</div>
		</button>
		<transition enter-active-class="transition ease-out duration-250" enter-class="opacity-0 scale-100 -translate-y-4"
			enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
			leave-class=" opacity-100 scale-100 translate-y-4" leave-to-class="opacity-0 scale-100">
			<div v-show="visible" class="absolute bg-secondary z-50 p-4 w-auto text-foreground top-4 rounded translate-y-10"
				role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
				<div class="space-y-2 bg-secondary/10" role="none">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	props: ['title', 'numberOfItemsSelected'],
	data() {
		return {
			visible: false
		}
	},
	methods: {
		toggle() {
			this.visible = !this.visible;
		},
		close(e) {
			if (!this.$el.contains(e.target)) {
				this.visible = false
			}
		}
	},
	mounted() {
		document.addEventListener('click', this.close)
	},
	beforeDestroy() {
		document.removeEventListener('click', this.close)
	}

}
</script>

<style></style>