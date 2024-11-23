<template>
	<div class="bg-secondary text-left w-full  hover:bg-primary/20 transition-colors duration-150">
		<div class="p-4 hover:cursor-pointer">
			<span @click="visible = !visible">

				<div class="flex justify-between items-center cursor-pointer">
					<div class="text-xl text-foreground">
						{{ title }}
					</div>
					<div class="fill-foreground stroke-foreground ">
						<!-- plus small -->
						<svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
							class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
						</svg>
						<!-- minus small -->
						<svg v-if="visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
							class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
						</svg>
					</div>
				</div>
			</span>
			<transition enter-active-class="transition ease-out duration-150" enter-class="opacity-0 scale-100 -translate-y-4"
				enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
				leave-class=" opacity-100 scale-100 translate-y-4" leave-to-class="opacity-0 scale-100">
				<div v-if="visible">
					<slot></slot>
				</div>
			</transition>
		</div>


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