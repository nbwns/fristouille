<template>
  <div>
	  	<!-- Allergies -->
		<div>
			<h2>Régime alimentaire</h2>
			<div>
				<div>végétalien <input type="checkbox" @click="filter('diet:Végétalien', $event)"/></div>
				<div>végétarien <input type="checkbox" @click="filter('diet:Végétarien', $event)"/></div>
				<div>omnivore <input type="checkbox" @click="filter('diet:Omnivore', $event)"/></div>
			</div>
		</div>
		<button @click="setFilters">Je valide</button>
		{{filters}}
  </div>
</template>

<script>
export default {
	data(){
		return{
			filters:[]
		}
	},
	methods:{
		filter(value, event){
			if(event.target.checked){
				this.addToFilters(value);
			}
			else{
				this.removeFromFilters(value);
			}
		},
		addToFilters(value){
			this.filters.push(value);
		},
		removeFromFilters(value){
			const index = this.filters.indexOf(value);
			if (index > -1) {
				this.filters.splice(index, 1); 
			}
		},
		setFilters(){
			let filterQuery = this.filters.join(' OR ');
			this.$emit("filtersChanged", filterQuery);
		}
	}
}
</script>

<style>

</style>