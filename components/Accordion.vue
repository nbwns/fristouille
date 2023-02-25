<template>
	<div class="text-left w-full ">
		<div class="bg-black-100 p-4">
			<span @click="visible = !visible">
				
				<div class="flex justify-between items-center">
					<div class="text-big">
						{{ title }}
					</div>
					<div class=" fill-white-300">
						<!-- plus small -->
						<svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
						</svg>
						<!-- minus small -->
						<svg v-if="visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
						</svg>
					</div>
				</div>
			</span>

		</div>
		<transition 
				enter-active-class="transition ease-out duration-100" 
				enter-class="opacity-0 scale-95" 
				enter-to-class="opacity-100 scale-100"
				leave-active-class="transition ease-in duration-75" 
				leave-class=" opacity-100 scale-100"
				leave-to-class="opacity-0 scale-95">
			<CheckboxFilter class="bg-black-300 p-4 mt-2" v-show="visible">
				<slot></slot>
			</CheckboxFilter>
		</transition>

	</div>
</template>

<script>

import CheckboxFilter from "~/molecules/CheckboxFilter.vue"

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
	components: { CheckboxFilter }
}
</script>





<style></style>