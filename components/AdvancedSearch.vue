<template>
  <div>
	  	<div class="hidden md:flex flex-grow md:w-auto pt-2 ">
			<div class="flex flex-grow text-lg text-white-200 font-inter capitalize font-medium ">
				<dropdown-menu title="Régime alimentaire">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">végétalien <input type="checkbox" @click="filter('diet','Végétalien', $event)" :checked="checked('diet','Végétalien')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">végétarien <input type="checkbox" @click="filter('diet','Végétarien', $event)" :checked="checked('diet','Végétarien')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">omnivore <input type="checkbox" @click="filter('diet','Omnivore', $event)" :checked="checked('diet','Omnivore')"></div>
				</dropdown-menu>

				<dropdown-menu title="Type de plat">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">entrée <input type="checkbox" @click="filter('category','Entrée', $event)" :checked="checked('category','Entrée')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">plat <input type="checkbox" @click="filter('category','Plat', $event)" :checked="checked('category','Plat')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">accompagnement <input type="checkbox" @click="filter('category','Accompagnement', $event)" :checked="checked('category','Accompagnement')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">dessert <input type="checkbox" @click="filter('category','Dessert', $event)" :checked="checked('category','Dessert')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-7">boisson <input type="checkbox" @click="filter('category','Boisson', $event)" :checked="checked('category','Boisson')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-8">petit déjeuner <input type="checkbox" @click="filter('category','\'Petit déjeuner\'', $event)" :checked="checked('category','\'Petit déjeuner\'')"></div>
				</dropdown-menu>

				<dropdown-menu title="Allergies">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-9">arachide <input type="checkbox" @click="filter('free','arachide', $event)" :checked="checked('free','arachide')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-10">gluten <input type="checkbox" @click="filter('free','gluten', $event)" :checked="checked('free','gluten')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-11">fruit à coque <input type="checkbox" @click="filter('free','\'fruit à coque\'', $event)"  :checked="checked('free','fruit à coque')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-12">oeuf <input type="checkbox" @click="filter('free','oeuf', $event)"  :checked="checked('free','oeuf')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-13">produit laitier <input type="checkbox" @click="filter('free','\'produit laitier\'', $event)"  :checked="checked('free','produit laitier')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-14">soja <input type="checkbox" @click="filter('free','soja', $event)"   :checked="checked('free','soja')"></div>
				</dropdown-menu>

				<dropdown-menu title="Cuisine">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-15">asiatique <input type="checkbox" @click="filter('cuisine','Asiatique', $event)" :checked="checked('cuisine','Asiatique')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-16">américaine <input type="checkbox" @click="filter('cuisine','Américaine', $event)" :checked="checked('cuisine','Américaine')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-17">italienne <input type="checkbox" @click="filter('cuisine','Italienne', $event)" :checked="checked('cuisine','Italienne')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-18">méditerranéenne <input type="checkbox" @click="filter('cuisine','Méditerranéenne', $event)" :checked="checked('cuisine','Méditerranéenne')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-19">franco-belge <input type="checkbox" @click="filter('cuisine','Franco-belge', $event)" :checked="checked('cuisine','Franco-belge')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-20">indienne <input type="checkbox" @click="filter('cuisine','Indienne', $event)" :checked="checked('cuisine','Indienne')"></div>
				</dropdown-menu>

				<dropdown-menu title="Saison">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-20">janvier <input type="checkbox" @click="filter('months','1', $event)" :checked="checked('months','1')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-21">février <input type="checkbox" @click="filter('months','2', $event)" :checked="checked('months','2')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-22">mars <input type="checkbox" @click="filter('months','3', $event)" :checked="checked('months','3')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-23">avril <input type="checkbox" @click="filter('months','4', $event)" :checked="checked('months','4')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-24">mai <input type="checkbox" @click="filter('months','5', $event)" :checked="checked('months','5')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-25">juin <input type="checkbox" @click="filter('months','6', $event)" :checked="checked('months','6')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-26">juillet <input type="checkbox" @click="filter('months','7', $event)" :checked="checked('months','7')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-27">août <input type="checkbox" @click="filter('months','8', $event)" :checked="checked('months','8')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-28">septembre <input type="checkbox" @click="filter('months','9', $event)" :checked="checked('months','9')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-29">octobre <input type="checkbox" @click="filter('months','10', $event)" :checked="checked('months','10')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-30">novembre <input type="checkbox" @click="filter('months','11', $event)" :checked="checked('months','11')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-31">décembre <input type="checkbox" @click="filter('months','12', $event)" :checked="checked('months','12')"></div>
				</dropdown-menu>

				<button @click="setFilters">Je valide</button>
			</div>
		</div>
		  
		  
		 
		
  </div>
</template>

<script>
import DropdownMenu from '~/components/DropdownMenu.vue'
 
export default {
	components:{
		DropdownMenu
	},
	props: ["urlFilters"],
	data(){
		return{
			filters:{
				diet: [],
				category:[],
				free: [],
				cuisine: [],
				months:[]
			},
			dropdowns: {
				diet: false
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
		},
		toggleDropdown(type){
			this.dropdowns[type] = !this.dropdowns[type];
		}
	}
}
</script>

<style>

</style>