<template>
  <div class="text-left w-screen">
		<div class="bg-reglisse-200">
			<span @click="visible = !visible">
				<strong>{{title}}</strong>

				<!-- plus small -->
				<svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
				</svg>
				<!-- minus small -->
				<svg v-if="visible"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
				</svg>
			</span>
		</div>
		<!-- TODO: CSS transition j'y arrive pas -->
		<div class="bg-reglisse-100" v-show="visible">
			<slot></slot>
		</div>
  </div>
</template>

<script>
export default {
	props:['title'],
	data(){
		return {
			visible: false
		}
	},
	methods:{
		toggle(){
			this.visible = !this.visible;
		},
		close (e) {
			if (!this.$el.contains(e.target)) {
				this.visible = false
			}
		}
	},
	mounted () {
		document.addEventListener('click', this.close)
	},
	beforeDestroy () {
		document.removeEventListener('click',this.close)
	}
}
</script>

<style>

</style>