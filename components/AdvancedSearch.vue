<template>
  <div>
	  	<!-- Allergies -->
		<div>
			<h2>Régime alimentaire</h2>
			<div>
				<div>végétalien <input type="checkbox" @click="filter('diet','Végétalien', $event)" :checked="checked('diet','Végétalien')"></div>
				<div>végétarien <input type="checkbox" @click="filter('diet','Végétarien', $event)" :checked="checked('diet','Végétarien')"></div>
				<div>omnivore <input type="checkbox" @click="filter('diet','Omnivore', $event)" :checked="checked('diet','Omnivore')"></div>
			</div>
			<h2>Type de plat</h2>
			<div>
				<div>entrée <input type="checkbox" @click="filter('category','Entrée', $event)" :checked="checked('category','Entrée')"></div>
				<div>plat <input type="checkbox" @click="filter('category','Plat', $event)" :checked="checked('category','Plat')"></div>
				<div>accompagnement <input type="checkbox" @click="filter('category','Accompagnement', $event)" :checked="checked('category','Accompagnement')"></div>
				<div>dessert <input type="checkbox" @click="filter('category','Dessert', $event)" :checked="checked('category','Dessert')"></div>
				<div>boisson <input type="checkbox" @click="filter('category','Boisson', $event)" :checked="checked('category','Boisson')"></div>
				<div>petit déjeuner <input type="checkbox" @click="filter('category','\'Petit déjeuner\'', $event)" :checked="checked('category','\'Petit déjeuner\'')"></div>
			</div>
			<h2>Allergies</h2>
			<div>
				<div>arachide <input type="checkbox" @click="filter('free','arachide', $event)" :checked="checked('free','arachide')"></div>
				<div>gluten <input type="checkbox" @click="filter('free','gluten', $event)" :checked="checked('free','gluten')"></div>
				<div>fruit à coque <input type="checkbox" @click="filter('free','\'fruit à coque\'', $event)"  :checked="checked('free','fruit à coque')"></div>
				<div>oeuf <input type="checkbox" @click="filter('free','oeuf', $event)"  :checked="checked('free','oeuf')"></div>
				<div>produit laitier <input type="checkbox" @click="filter('free','\'produit laitier\'', $event)"  :checked="checked('free','produit laitier')"></div>
				<div>soja <input type="checkbox" @click="filter('free','soja', $event)"   :checked="checked('free','soja')"></div>
			</div>
			<h2>Cuisine</h2>
			<div>
				<div>asiatique <input type="checkbox" @click="filter('cuisine','Asiatique', $event)" :checked="checked('cuisine','Asiatique')"></div>
				<div>américaine <input type="checkbox" @click="filter('cuisine','Américaine', $event)" :checked="checked('cuisine','Américaine')"></div>
				<div>italienne <input type="checkbox" @click="filter('cuisine','Italienne', $event)" :checked="checked('cuisine','Italienne')"></div>
				<div>méditerranéenne <input type="checkbox" @click="filter('cuisine','Méditerranéenne', $event)" :checked="checked('cuisine','Méditerranéenne')"></div>
				<div>franco-belge <input type="checkbox" @click="filter('cuisine','Franco-belge', $event)" :checked="checked('cuisine','Franco-belge')"></div>
				<div>indienne <input type="checkbox" @click="filter('cuisine','Indienne', $event)" :checked="checked('cuisine','Indienne')"></div>
			</div>
			<h2>Saisonnalité</h2>
			<div>
				<div>janvier <input type="checkbox" @click="filter('months','1', $event)" :checked="checked('months','1')"></div>
				<div>février <input type="checkbox" @click="filter('months','2', $event)" :checked="checked('months','2')"></div>
				<div>mars <input type="checkbox" @click="filter('months','3', $event)" :checked="checked('months','3')"></div>
				<div>avril <input type="checkbox" @click="filter('months','4', $event)" :checked="checked('months','4')"></div>
				<div>mai <input type="checkbox" @click="filter('months','5', $event)" :checked="checked('months','5')"></div>
				<div>juin <input type="checkbox" @click="filter('months','6', $event)" :checked="checked('months','6')"></div>
				<div>juillet <input type="checkbox" @click="filter('months','7', $event)" :checked="checked('months','7')"></div>
				<div>août <input type="checkbox" @click="filter('months','8', $event)" :checked="checked('months','8')"></div>
				<div>septembre <input type="checkbox" @click="filter('months','9', $event)" :checked="checked('months','9')"></div>
				<div>octobre <input type="checkbox" @click="filter('months','10', $event)" :checked="checked('months','10')"></div>
				<div>novembre <input type="checkbox" @click="filter('months','11', $event)" :checked="checked('months','11')"></div>
				<div>décembre <input type="checkbox" @click="filter('months','12', $event)" :checked="checked('months','12')"></div>
			</div>
		</div>
		<button @click="setFilters">Je valide</button>
  </div>
</template>

<script>
export default {
	props: ["urlFilters"],
	data(){
		return{
			filters:{
				diet: [],
				category:[],
				free: [],
				cuisine: [],
				months:[]
			}
		}
	},
	computed:{
		searchFilters(){
			return this.$store.state.searchFilters;
		}
	},
	methods:{
		checked(type,value){
			if(this.urlFilters){
				const index = this.urlFilters[type].indexOf(value);
				if (index > -1) {
					return true;
				}
				return false;
			}
		},
		filter(type, value, event){
			if(event.target.checked){
				this.addToFilters(type, value);
			}
			else{
				this.removeFromFilters(type, value);
			}
		},
		addToFilters(type, value){
			this.filters[type].push(value);
		},
		removeFromFilters(type, value){
			const index = this.filters[type].indexOf(value);
			if (index > -1) {
				this.filters[type].splice(index, 1); 
			}
		},
		setFilters(){
			//save filters in the store
			this.$store.commit('saveSearchFilters', JSON.parse(JSON.stringify(this.filters)));
			//trigger parent component
			this.$emit("filtersChanged");
		}
	}
}
</script>

<style>

</style>