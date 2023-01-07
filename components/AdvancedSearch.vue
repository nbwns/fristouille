<template>
  <div>
	  	<div class="hidden md:flex flex-grow md:w-auto pt-2 ">
			<div class="flex flex-grow text-lg text-white-200 font-inter capitalize font-medium ">
				<!-- dropdown menus -->
				<dropdown-menu title="Régime alimentaire">
					<!-- TODO: the div should be clickable, not only the checkbox -->
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">végétalien <input ref="Végétalien" type="checkbox" @click="filter('diet','Végétalien', $event)" :checked="checked('diet','Végétalien')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">végétarien <input ref="Végétarien" type="checkbox" @click="filter('diet','Végétarien', $event)" :checked="checked('diet','Végétarien')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">omnivore <input  ref="Omnivore" type="checkbox" @click="filter('diet','Omnivore', $event)" :checked="checked('diet','Omnivore')"></div>
				</dropdown-menu>

				<dropdown-menu title="Type de plat">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">entrée <input ref="Entrée" type="checkbox" @click="filter('category','Entrée', $event)" :checked="checked('category','Entrée')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">plat <input ref="Plat" type="checkbox" @click="filter('category','Plat', $event)" :checked="checked('category','Plat')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">accompagnement <input ref="Accompagnement" type="checkbox" @click="filter('category','Accompagnement', $event)" :checked="checked('category','Accompagnement')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">dessert <input ref="Dessert" type="checkbox" @click="filter('category','Dessert', $event)" :checked="checked('category','Dessert')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-7">boisson <input ref="Boisson" type="checkbox" @click="filter('category','Boisson', $event)" :checked="checked('category','Boisson')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-8">petit déjeuner <input ref="Petit déjeuner" type="checkbox" @click="filter('category','\'Petit déjeuner\'', $event)" :checked="checked('category','\'Petit déjeuner\'')"></div>
				</dropdown-menu>

				<dropdown-menu title="Allergies">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-9">arachide <input ref="Arachide" type="checkbox" @click="filter('free','Arachide', $event)" :checked="checked('free','Arachide')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-10">gluten <input ref="Gluten" type="checkbox" @click="filter('free','Gluten', $event)" :checked="checked('free','Gluten')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-11">fruit à coque <input ref="'Fruit à coque'" type="checkbox" @click="filter('free','\'Fruit à coque\'', $event)" :checked="checked('free','Fruit à coque')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-12">oeuf <input ref="Oeuf" type="checkbox" @click="filter('free','Oeuf', $event)" :checked="checked('free','Oeuf')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-13">produit laitier <input ref="'Produit laitier'" type="checkbox" @click="filter('free','\'Produit laitier\'', $event)" :checked="checked('free','Produit laitier')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-14">soja <input ref="Soja" type="checkbox" @click="filter('free','Soja', $event)" :checked="checked('free','Soja')"></div>
				</dropdown-menu>

				<dropdown-menu title="Cuisine">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-15">asiatique <input ref="Asiatique" type="checkbox" @click="filter('cuisine','Asiatique', $event)" :checked="checked('cuisine','Asiatique')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-16">américaine <input ref="Américaine" type="checkbox" @click="filter('cuisine','Américaine', $event)" :checked="checked('cuisine','Américaine')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-17">italienne <input ref="Italienne" type="checkbox" @click="filter('cuisine','Italienne', $event)" :checked="checked('cuisine','Italienne')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-18">méditerranéenne <input ref="Méditerranéenne" type="checkbox" @click="filter('cuisine','Méditerranéenne', $event)" :checked="checked('cuisine','Méditerranéenne')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-19">franco-belge <input ref="Franco-belge" type="checkbox" @click="filter('cuisine','Franco-belge', $event)" :checked="checked('cuisine','Franco-belge')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-20">indienne <input ref="Indienne" type="checkbox" @click="filter('cuisine','Indienne', $event)" :checked="checked('cuisine','Indienne')"></div>
				</dropdown-menu>

				<dropdown-menu title="Saison">
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-20">janvier <input ref="1" type="checkbox" @click="filter('months','1', $event)" :checked="checked('months','1')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-21">février <input ref="2" type="checkbox" @click="filter('months','2', $event)" :checked="checked('months','2')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-22">mars <input ref="3" type="checkbox" @click="filter('months','3', $event)" :checked="checked('months','3')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-23">avril <input ref="4" type="checkbox" @click="filter('months','4', $event)" :checked="checked('months','4')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-24">mai <input ref="5" type="checkbox" @click="filter('months','5', $event)" :checked="checked('months','5')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-25">juin <input ref="6" type="checkbox" @click="filter('months','6', $event)" :checked="checked('months','6')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-26">juillet <input ref="7" type="checkbox" @click="filter('months','7', $event)" :checked="checked('months','7')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-27">août <input ref="8" type="checkbox" @click="filter('months','8', $event)" :checked="checked('months','8')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-28">septembre <input ref="9" type="checkbox" @click="filter('months','9', $event)" :checked="checked('months','9')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-29">octobre <input ref="10" type="checkbox" @click="filter('months','10', $event)" :checked="checked('months','10')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-30">novembre <input ref="11" type="checkbox" @click="filter('months','11', $event)" :checked="checked('months','11')"></div>
					<div class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-31">décembre <input ref="12" type="checkbox" @click="filter('months','12', $event)" :checked="checked('months','12')"></div>
				</dropdown-menu>
			</div>
			<div class="flex flex-row gap-4 items-start">
				<!-- selected filters -->
				<!-- loop on all filter categories -->
				<div v-for="(type, name) in filters" :key="name">
					<div class="relative block" v-for="f in type" :key="f">
						<div class="tag-gum block pr-8 w-full" @click="removeTag(name,f)">
							{{ f.replaceAll("'","") }}
							<span class="absolute inset-y-0 right-0 flex items-center pr-2 ">
								<svg viewBox="0 0 20 20" class="fill-white-200 h-5 w-5" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.98964 5L10.9148 8.92498L14.84 5L15.8301 5.99002L11.9049 9.915L15.8301 13.84L14.84 14.83L10.9148 10.905L6.98964 14.83L5.99957 13.84L9.92475 9.915L5.99957 5.99002L6.98964 5Z"
									fill="#F3EEE6" />
								</svg>
							</span>
						</div>
					</div>
				</div>
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

			this.setFilters();
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
		},
		toggleDropdown(type){
			this.dropdowns[type] = !this.dropdowns[type];
		},
		removeTag(type, value){
			console.log(type,value);
			this.removeFromFilters(type,value);
			this.$refs[value].checked = false;
		}
	}
}
</script>

<style>

</style>