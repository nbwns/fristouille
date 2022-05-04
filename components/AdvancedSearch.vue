<template>
  <div>
	  	<!-- Allergies -->
		<div>
			<h2>Régime alimentaire</h2>
			<div>
				<div>végétalien <input type="checkbox" @click="filter('diet','Végétalien', $event)"/></div>
				<div>végétarien <input type="checkbox" @click="filter('diet','Végétarien', $event)"/></div>
				<div>omnivore <input type="checkbox" @click="filter('diet','Omnivore', $event)"/></div>
			</div>
			<h2>Type de plat</h2>
			<div>
				<div>entrée <input type="checkbox" @click="filter('category','Entrée', $event)"/></div>
				<div>plat <input type="checkbox" @click="filter('category','Plat', $event)"/></div>
				<div>accompagnement <input type="checkbox" @click="filter('category','Accompagnement', $event)"/></div>
				<div>dessert <input type="checkbox" @click="filter('category','Dessert', $event)"/></div>
				<div>boisson <input type="checkbox" @click="filter('category','Boisson', $event)"/></div>
				<div>petit déjeuner <input type="checkbox" @click="filter('category','\'Petit déjeuner\'', $event)"/></div>
			</div>
			<h2>Allergies</h2>
			<div>
				<div>arachide <input type="checkbox" @click="filter('free','arachide', $event)"/></div>
				<div>gluten <input type="checkbox" @click="filter('free','gluten', $event)"/></div>
				<div>fruit à coque <input type="checkbox" @click="filter('free','\'fruit à coque\'', $event)"/></div>
				<div>oeuf <input type="checkbox" @click="filter('free','oeuf', $event)"/></div>
				<div>produit laitier <input type="checkbox" @click="filter('free','\'produit laitier\'', $event)"/></div>
				<div>soja <input type="checkbox" @click="filter('free','soja', $event)"/></div>
			</div>
			<h2>Cuisine</h2>
			<div>
				<div>asiatique <input type="checkbox" @click="filter('cuisine','Asiatique', $event)"/></div>
				<div>américaine <input type="checkbox" @click="filter('cuisine','Américaine', $event)"/></div>
				<div>italienne <input type="checkbox" @click="filter('cuisine','Italienne', $event)"/></div>
				<div>méditerranéenne <input type="checkbox" @click="filter('cuisine','Méditerranéenne', $event)"/></div>
				<div>franco-belge <input type="checkbox" @click="filter('cuisine','Franco-belge', $event)"/></div>
				<div>indienne <input type="checkbox" @click="filter('cuisine','Indienne', $event)"/></div>
			</div>
			<h2>Saisonnalité</h2>
			<div>
				<div>janvier <input type="checkbox" @click="filter('months','1', $event)"/></div>
				<div>février <input type="checkbox" @click="filter('months','2', $event)"/></div>
				<div>mars <input type="checkbox" @click="filter('months','3', $event)"/></div>
				<div>avril <input type="checkbox" @click="filter('months','4', $event)"/></div>
				<div>mai <input type="checkbox" @click="filter('months','5', $event)"/></div>
				<div>juin <input type="checkbox" @click="filter('months','6', $event)"/></div>
				<div>juillet <input type="checkbox" @click="filter('months','7', $event)"/></div>
				<div>août <input type="checkbox" @click="filter('months','8', $event)"/></div>
				<div>septembre <input type="checkbox" @click="filter('months','9', $event)"/></div>
				<div>octobre <input type="checkbox" @click="filter('months','10', $event)"/></div>
				<div>novembre <input type="checkbox" @click="filter('months','11', $event)"/></div>
				<div>décembre <input type="checkbox" @click="filter('months','12', $event)"/></div>
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
			filters:{
				diet: [],
				category:[],
				free: [],
				cuisine: [],
				months:[]
			}
		}
	},
	methods:{
		filter(type, value, event){
			value = `${type}:${value}`;
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
			let filterQuery = '';
			for(let cat in this.filters){
				if(this.filters[cat].length > 0){
					if(filterQuery != ''){
						filterQuery += " AND ";
					}

					filterQuery += `(${this.filters[cat].join(' OR ')})`;
				}
				
			}
			this.$emit("filtersChanged", filterQuery);
		}
	}
}
</script>

<style>

</style>