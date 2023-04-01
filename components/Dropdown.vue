<template>
	<div class="dropdown">
		<button @click.prevent="toggle" id="menu-button" type="button" class="dropdown-wrap navlink" aria-expanded="true"
			aria-haspopup="true">
			<div class="text-small">
				{{ title }}
				<svg class="w-6 h-6 fill-white-300" stroke-width="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
					aria-hidden="true">
					<path fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd" />
				</svg>
			</div>
		</button>
		<transition enter-active-class="transition ease-out duration-250" enter-class="opacity-0 scale-100 -translate-y-4"
			enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
			leave-class=" opacity-100 scale-100 translate-y-4" leave-to-class="opacity-0 scale-100">
			<div v-show="visible" class="dropdown-wrap-content translate-y-10" role="menu" aria-orientation="vertical"
				aria-labelledby="menu-button" tabindex="-1">
				<div class="dropdown-wrap-content-inner" role="none">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	props: ['title'],
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
	},

}
</script>

<style></style>