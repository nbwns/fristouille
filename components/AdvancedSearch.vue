<template>
  <div>
		<!-- TODO: 
		- only save filters in store on search button click ? -> would allow to close the mobile popup without saving the filters
		- synchronise checkboxes between desktop and mobile -> for instance if screen is rotated
		-->

	  	<!-- desktop advanced search -->
		<div class="hidden md:flex flex-grow md:w-auto pt-2 ">
			<div class="flex flex-grow text-lg text-white-200 font-inter capitalize font-medium ">
				<!-- dropdown menus -->
				<dropdown title="Régime alimentaire">
					<checkbox-filter uid="Végétalien" ref="Végétalien" @check="filter('diet','Végétalien', $event)" :checked="checked('diet','Végétalien')">végétalien</checkbox-filter>
					<checkbox-filter uid="Végétarien" ref="Végétarien" @check="filter('diet','Végétarien', $event)" :checked="checked('diet','Végétarien')">végétarien</checkbox-filter>
					<checkbox-filter uid="Omnivore" ref="Omnivore" @check="filter('diet','Omnivore', $event)" :checked="checked('diet','Omnivore')">omnivore</checkbox-filter>
				</dropdown>

				<dropdown title="Type de plat">
					<checkbox-filter uid="Entrée" ref="Entrée" @check="filter('category','Entrée', $event)" :checked="checked('category','Entrée')">entrée</checkbox-filter>
					<checkbox-filter uid="Plat" ref="Plat" @check="filter('category','Plat', $event)" :checked="checked('category','Plat')">plat</checkbox-filter>
					<checkbox-filter uid="Accompagnement" ref="Accompagnement" @check="filter('category','Accompagnement', $event)" :checked="checked('category','Accompagnement')">accompagnement</checkbox-filter>
					<checkbox-filter uid="Dessert" ref="Dessert" @check="filter('category','Dessert', $event)" :checked="checked('category','Dessert')">dessert</checkbox-filter>
					<checkbox-filter uid="Boisson" ref="Boisson" @check="filter('category','Boisson', $event)" :checked="checked('category','Boisson')">boisson</checkbox-filter>
					<checkbox-filter uid="Petit déjeuner" ref="'Petit déjeuner'" @check="filter('category','\'Petit déjeuner\'', $event)" :checked="checked('category','\'Petit déjeuner\'')">petit déjeuner</checkbox-filter>
				</dropdown>

				<dropdown title="Allergies">
					<checkbox-filter uid="Arachide" ref="Arachide" @check="filter('free','Arachide', $event)" :checked="checked('free','Arachide')">arachide</checkbox-filter>
					<checkbox-filter uid="Gluten" ref="Gluten" @check="filter('free','Gluten', $event)" :checked="checked('free','Gluten')">gluten</checkbox-filter>
					<checkbox-filter uid="'Fruit à coque'" ref="'Fruit à coque'" @check="filter('free','\'Fruit à coque\'', $event)" :checked="checked('free','\'Fruit à coque\'')">fruit à coque</checkbox-filter>
					<checkbox-filter uid="Oeuf" ref="Oeuf" @check="filter('free','Oeuf', $event)" :checked="checked('free','Oeuf')">oeuf</checkbox-filter>
					<checkbox-filter uid="'Produit laitier'" ref="'Produit laitier'" @check="filter('free','\'Produit laitier\'', $event)" :checked="checked('free','\'Produit laitier\'')">produit laitier</checkbox-filter>
					<checkbox-filter uid="Soja" ref="Soja" @check="filter('free','Soja', $event)" :checked="checked('free','Soja')">soja</checkbox-filter>
				</dropdown>

				<dropdown title="Cuisine">
					<checkbox-filter uid="Asiatique" ref="Asiatique" @check="filter('cuisine','Asiatique', $event)" :checked="checked('cuisine','Asiatique')">asiatique</checkbox-filter>
					<checkbox-filter uid="Américaine" ref="Américaine" @check="filter('cuisine','Américaine', $event)" :checked="checked('cuisine','Américaine')">américaine</checkbox-filter>
					<checkbox-filter uid="Italienne" ref="Italienne" @check="filter('cuisine','Italienne', $event)" :checked="checked('cuisine','Italienne')">italienne</checkbox-filter>
					<checkbox-filter uid="Méditerranéenne" ref="Méditerranéenne" @check="filter('cuisine','Méditerranéenne', $event)" :checked="checked('cuisine','Méditerranéenne')">méditerranéenne</checkbox-filter>
					<checkbox-filter uid="Franco-belge" ref="Franco-belge" @check="filter('cuisine','Franco-belge', $event)" :checked="checked('cuisine','Franco-belge')">franco-belge</checkbox-filter>
					<checkbox-filter uid="Indienne" ref="Indienne" @check="filter('cuisine','Indienne', $event)" :checked="checked('cuisine','Indienne')">indienne</checkbox-filter>
				</dropdown>

				<dropdown title="Saison">
					<checkbox-filter uid="1" ref="1" @check="filter('months','1', $event)" :checked="checked('months','1')">janvier</checkbox-filter>
					<checkbox-filter uid="2" ref="2" @check="filter('months','2', $event)" :checked="checked('months','2')">février</checkbox-filter>
					<checkbox-filter uid="3" ref="3" @check="filter('months','3', $event)" :checked="checked('months','3')">mars</checkbox-filter>
					<checkbox-filter uid="4" ref="4" @check="filter('months','4', $event)" :checked="checked('months','4')">avril</checkbox-filter>
					<checkbox-filter uid="5" ref="5" @check="filter('months','5', $event)" :checked="checked('months','5')">mai</checkbox-filter>
					<checkbox-filter uid="6" ref="6" @check="filter('months','6', $event)" :checked="checked('months','6')">juin</checkbox-filter>
					<checkbox-filter uid="7" ref="7" @check="filter('months','7', $event)" :checked="checked('months','7')">juillet</checkbox-filter>
					<checkbox-filter uid="8" ref="8" @check="filter('months','8', $event)" :checked="checked('months','8')">août</checkbox-filter>
					<checkbox-filter uid="9" ref="9" @check="filter('months','9', $event)" :checked="checked('months','9')">septembre</checkbox-filter>
					<checkbox-filter uid="10" ref="10" @check="filter('months','10', $event)" :checked="checked('months','10')">octobre</checkbox-filter>
					<checkbox-filter uid="11" ref="11" @check="filter('months','11', $event)" :checked="checked('months','11')">novembre</checkbox-filter>
					<checkbox-filter uid="12" ref="12" @check="filter('months','12', $event)" :checked="checked('months','12')">décembre</checkbox-filter>
				</dropdown>
			</div>
			
		</div>
		<!-- mobile advanced search -->
		<!-- TODO: make popup -->
		<div class="md:hidden flex flex-grow flex-col w-auto pt-2" v-show="popupMobile">
			<!-- header -->
			<div class="inline-block">
				<div @click="$emit('closePopup')">fermer</div>
				<div><strong>filtres</strong></div>
				<div @click="$emit('triggerSearch')">OK</div>
			</div>
			<!-- accordions -->
			<div class="flex-col">
					<accordion title="Régime alimentaire" key="diet">
						<checkbox-filter uid="Végétalien-a" @check="filter('diet','Végétalien', $event)" :checked="checked('diet','Végétalien')">végétalien</checkbox-filter>
						<checkbox-filter uid="Végétarien-a" @check="filter('diet','Végétarien', $event)" :checked="checked('diet','Végétarien')">végétarien</checkbox-filter>
						<checkbox-filter uid="Omnivore-a" @check="filter('diet','Omnivore', $event)" :checked="checked('diet','Omnivore')">omnivore</checkbox-filter>
					</accordion>

					<accordion title="Type de plat" key="category">
						<checkbox-filter uid="Entrée-a" @check="filter('category','Entrée', $event)" :checked="checked('category','Entrée')">entrée</checkbox-filter>
						<checkbox-filter uid="Plat-a" @check="filter('category','Plat', $event)" :checked="checked('category','Plat')">plat</checkbox-filter>
						<checkbox-filter uid="Accompagnement-a" @check="filter('category','Accompagnement', $event)" :checked="checked('category','Accompagnement')">accompagnement</checkbox-filter>
						<checkbox-filter uid="Dessert-a" @check="filter('category','Dessert', $event)" :checked="checked('category','Dessert')">dessert</checkbox-filter>
						<checkbox-filter uid="Boisson-a" @check="filter('category','Boisson', $event)" :checked="checked('category','Boisson')">boisson</checkbox-filter>
						<checkbox-filter uid="Petit déjeuner-a"  @check="filter('category','\'Petit déjeuner\'', $event)" :checked="checked('category','\'Petit déjeuner\'')">petit déjeuner</checkbox-filter>
					</accordion>

					<accordion title="Allergies" key="allergies">
						<checkbox-filter uid="Arachide-a" @check="filter('free','Arachide', $event)" :checked="checked('free','Arachide')">arachide</checkbox-filter>
						<checkbox-filter uid="Gluten-a" @check="filter('free','Gluten', $event)" :checked="checked('free','Gluten')">gluten</checkbox-filter>
						<checkbox-filter uid="'Fruit à coque'-a"  @check="filter('free','\'Fruit à coque\'', $event)" :checked="checked('free','\'Fruit à coque\'')">fruit à coque</checkbox-filter>
						<checkbox-filter uid="Oeuf-a" @check="filter('free','Oeuf', $event)" :checked="checked('free','Oeuf')">oeuf</checkbox-filter>
						<checkbox-filter uid="'Produit laitier'-a" @check="filter('free','\'Produit laitier\'', $event)" :checked="checked('free','\'Produit laitier\'')">produit laitier</checkbox-filter>
						<checkbox-filter uid="Soja-a" @check="filter('free','Soja', $event)" :checked="checked('free','Soja')">soja</checkbox-filter>
					</accordion>

					<accordion title="Cuisine" key="cuisine">
						<checkbox-filter uid="Asiatique-a" @check="filter('cuisine','Asiatique', $event)" :checked="checked('cuisine','Asiatique')">asiatique</checkbox-filter>
						<checkbox-filter uid="Américaine-a" @check="filter('cuisine','Américaine', $event)" :checked="checked('cuisine','Américaine')">américaine</checkbox-filter>
						<checkbox-filter uid="Italienne-a" @check="filter('cuisine','Italienne', $event)" :checked="checked('cuisine','Italienne')">italienne</checkbox-filter>
						<checkbox-filter uid="Méditerranéenne-a" @check="filter('cuisine','Méditerranéenne', $event)" :checked="checked('cuisine','Méditerranéenne')">méditerranéenne</checkbox-filter>
						<checkbox-filter uid="Franco-belge-a" @check="filter('cuisine','Franco-belge', $event)" :checked="checked('cuisine','Franco-belge')">franco-belge</checkbox-filter>
						<checkbox-filter uid="Indienne-a" @check="filter('cuisine','Indienne', $event)" :checked="checked('cuisine','Indienne')">indienne</checkbox-filter>
					</accordion>

					<accordion title="Saison" key="season">
						<checkbox-filter uid="1-a" @check="filter('months','1', $event)" :checked="checked('months','1')">janvier</checkbox-filter>
						<checkbox-filter uid="2-a" @check="filter('months','2', $event)" :checked="checked('months','2')">février</checkbox-filter>
						<checkbox-filter uid="3-a" @check="filter('months','3', $event)" :checked="checked('months','3')">mars</checkbox-filter>
						<checkbox-filter uid="4-a" @check="filter('months','4', $event)" :checked="checked('months','4')">avril</checkbox-filter>
						<checkbox-filter uid="5-a" @check="filter('months','5', $event)" :checked="checked('months','5')">mai</checkbox-filter>
						<checkbox-filter uid="6-a" @check="filter('months','6', $event)" :checked="checked('months','6')">juin</checkbox-filter>
						<checkbox-filter uid="7-a" @check="filter('months','7', $event)" :checked="checked('months','7')">juillet</checkbox-filter>
						<checkbox-filter uid="8-a" @check="filter('months','8', $event)" :checked="checked('months','8')">août</checkbox-filter>
						<checkbox-filter uid="9-a" @check="filter('months','9', $event)" :checked="checked('months','9')">septembre</checkbox-filter>
						<checkbox-filter uid="10-a" @check="filter('months','10', $event)" :checked="checked('months','10')">octobre</checkbox-filter>
						<checkbox-filter uid="11-a" @check="filter('months','11', $event)" :checked="checked('months','11')">novembre</checkbox-filter>
						<checkbox-filter uid="12-a" @check="filter('months','12', $event)" :checked="checked('months','12')">décembre</checkbox-filter>
					</accordion>
			</div>
		</div>
  </div>
</template>

<script>
import Dropdown from '~/components/Dropdown.vue'
import Accordion from '~/components/Accordion.vue'
import CheckboxFilter from '~/molecules/CheckboxFilter.vue'
 
export default {
	components:{
		Dropdown,
		Accordion,
		CheckboxFilter
	},
	props: ["popupMobile"],
	computed:{
		searchFilters(){
			return this.$store.state.searchFilters;
		}
	},
	methods:{
		checked(type,value){
			//to change the checked property with values from the store
			if(this.searchFilters && this.searchFilters[type]){
				const index = this.searchFilters[type].indexOf(value);
				if (index > -1) {
					return true;
				}
				return false;
			}
		},
		filter(type, value, event){
			if(event.target.checked){
				this.$store.commit('addToFilters', {type, value});
			}
			else{
				this.$store.commit('removeFromFilters', {type, value});
			}
		},
		toggleDropdown(type){
			this.dropdowns[type] = !this.dropdowns[type];
		}
	}
}
</script>

<style>

</style>