<template>
	<div class="wrap_mobile_filters">
		<!-- selected filters -->
		<!-- loop on all filter categories -->
			<div v-for="(type, name) in searchFilters" :key="name" class="flex flex-row my-5 gap-3">
				<tag v-for="f in type" class="cursor-pointer" :key="f" look="primary" @click="removeTag(name,f)">
					{{ f.replaceAll("'","").replaceAll("-", " ") }}
					<span class="inset-y-0 right-0 flex items-center pr-2 flex-1">
						<svg viewBox="0 0 20 20" class="fill-white-200 h-5 w-5" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.98964 5L10.9148 8.92498L14.84 5L15.8301 5.99002L11.9049 9.915L15.8301 13.84L14.84 14.83L10.9148 10.905L6.98964 14.83L5.99957 13.84L9.92475 9.915L5.99957 5.99002L6.98964 5Z"
							fill="#F3EEE6" />
						</svg>
					</span>
				</tag>
		</div>
	</div>
</template>

<script>
import Tag from '~/molecules/Tag.vue'

export default {
	components:{
		Tag
	},
	computed:{
		searchFilters(){
			//searchFilters is an object
			let searchFilters =  this.$store.state.searchFilters;

			//filter properties which don't contain any value
			return Object.fromEntries(Object.entries(searchFilters).filter(([key, value]) => value.length > 0));
		}
	},
	methods:{
		removeTag(type, value){
			this.$store.commit('removeFromFilters', {type, value});
		}
	}
}
</script>

<style>

</style>