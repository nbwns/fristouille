<template>
	<div class="w-full">
		<!-- desktop advanced search -->
		<div class="hidden md:flex flex-grow md:w-auto pt-2 justify-between ">
			<div class="flex flex-grow rounded justify-between">
				<!-- dropdown menus -->
				<dropdown title="Choix alimentaire" :numberOfItemsSelected="numberOfItemsSelected('diet')">
					<checkbox-filter uid="Végétalien" ref="Végétalien" @check="filter('diet', 'Végétalien', $event)"
						:checked="checked('diet', 'Végétalien')">végétalien</checkbox-filter>
					<checkbox-filter uid="Végétarien" ref="Végétarien" @check="filter('diet', 'Végétarien', $event)"
						:checked="checked('diet', 'Végétarien')">végétarien</checkbox-filter>
					<checkbox-filter uid="Omnivore" ref="Omnivore" @check="filter('diet', 'Omnivore', $event)"
						:checked="checked('diet', 'Omnivore')">omnivore</checkbox-filter>
				</dropdown>

				<dropdown title="Type de plat" :numberOfItemsSelected="numberOfItemsSelected('category')">
					<checkbox-filter uid="Apéritif" @check="filter('category', 'Apéritif', $event)"
						:checked="checked('category', 'Apéritif')">apéro</checkbox-filter>
					<checkbox-filter uid="Entrée" ref="Entrée" @check="filter('category', 'Entrée', $event)"
						:checked="checked('category', 'Entrée')">entrée</checkbox-filter>
					<checkbox-filter uid="Plat" ref="Plat" @check="filter('category', 'Plat', $event)"
						:checked="checked('category', 'Plat')">plat</checkbox-filter>
					<checkbox-filter uid="Accompagnement" ref="Accompagnement"
						@check="filter('category', 'Accompagnement', $event)"
						:checked="checked('category', 'Accompagnement')">accompagnement</checkbox-filter>
					<checkbox-filter uid="Dessert" ref="Dessert" @check="filter('category', 'Dessert', $event)"
						:checked="checked('category', 'Dessert')">dessert</checkbox-filter>
					<checkbox-filter uid="Petit déjeuner" ref="'Petit déjeuner'"
						@check="filter('category', 'Petit déjeuner', $event)"
						:checked="checked('category', 'Petit déjeuner')">petit déjeuner</checkbox-filter>
				</dropdown>

				<dropdown title="Allergie" :numberOfItemsSelected="numberOfItemsSelected('free')">
					<checkbox-filter uid="Arachide" ref="Arachide" @check="filter('free', 'Arachide', $event)"
						:checked="checked('free', 'Arachide')">arachide</checkbox-filter>
					<checkbox-filter uid="Gluten" ref="Gluten" @check="filter('free', 'Gluten', $event)"
						:checked="checked('free', 'Gluten')">gluten</checkbox-filter>
					<checkbox-filter uid="'Fruit à coque'" ref="'Fruit à coque'" @check="filter('free', 'Fruit à coque', $event)"
						:checked="checked('free', 'Fruit à coque')">fruit à coque</checkbox-filter>
					<checkbox-filter uid="Oeuf" ref="Oeuf" @check="filter('free', 'Oeuf', $event)"
						:checked="checked('free', 'Oeuf')">oeuf</checkbox-filter>
					<checkbox-filter uid="'Produit laitier'" ref="'Produit laitier'"
						@check="filter('free', 'Produit laitier', $event)" :checked="checked('free', 'Produit laitier')">produit
						laitier</checkbox-filter>
					<checkbox-filter uid="Soja" ref="Soja" @check="filter('free', 'Soja', $event)"
						:checked="checked('free', 'Soja')">soja</checkbox-filter>
				</dropdown>

				<dropdown title="Cuisine" :numberOfItemsSelected="numberOfItemsSelected('cuisine')">
					<checkbox-filter uid="Asiatique" ref="Asiatique" @check="filter('cuisine', 'Asiatique', $event)"
						:checked="checked('cuisine', 'Asiatique')">asiatique</checkbox-filter>
					<checkbox-filter uid="Américaine" ref="Américaine" @check="filter('cuisine', 'Américaine', $event)"
						:checked="checked('cuisine', 'Américaine')">américaine</checkbox-filter>
					<checkbox-filter uid="Italienne" ref="Italienne" @check="filter('cuisine', 'Italienne', $event)"
						:checked="checked('cuisine', 'Italienne')">italienne</checkbox-filter>
					<checkbox-filter uid="Méditerranéenne" ref="Méditerranéenne"
						@check="filter('cuisine', 'Méditerranéenne', $event)"
						:checked="checked('cuisine', 'Méditerranéenne')">méditerranéenne</checkbox-filter>
					<checkbox-filter uid="Franco-belge" ref="Franco-belge" @check="filter('cuisine', 'Franco-belge', $event)"
						:checked="checked('cuisine', 'Franco-belge')">franco-belge</checkbox-filter>
					<checkbox-filter uid="Indienne" ref="Indienne" @check="filter('cuisine', 'Indienne', $event)"
						:checked="checked('cuisine', 'Indienne')">indienne</checkbox-filter>
				</dropdown>

				<dropdown title="Saison" :numberOfItemsSelected="numberOfItemsSelected('months')">
					<checkbox-filter uid="1-a" @check="filter('months', 'Janvier', $event)"
						:checked="checked('months', 'Janvier')">janvier</checkbox-filter>
					<checkbox-filter uid="2-a" @check="filter('months', 'Février', $event)"
						:checked="checked('months', 'Février')">février</checkbox-filter>
					<checkbox-filter uid="3-a" @check="filter('months', 'Mars', $event)"
						:checked="checked('months', 'Mars')">mars</checkbox-filter>
					<checkbox-filter uid="4-a" @check="filter('months', 'Avril', $event)"
						:checked="checked('months', 'Avril')">avril</checkbox-filter>
					<checkbox-filter uid="5-a" @check="filter('months', 'Mai', $event)"
						:checked="checked('months', 'Mai')">mai</checkbox-filter>
					<checkbox-filter uid="6-a" @check="filter('months', 'Juin', $event)"
						:checked="checked('months', 'Juin')">juin</checkbox-filter>
					<checkbox-filter uid="7-a" @check="filter('months', 'Juillet', $event)"
						:checked="checked('months', 'Juillet')">juillet</checkbox-filter>
					<checkbox-filter uid="8-a" @check="filter('months', 'Août', $event)"
						:checked="checked('months', 'Août')">août</checkbox-filter>
					<checkbox-filter uid="9-a" @check="filter('months', 'Septembre', $event)"
						:checked="checked('months', 'Septembre')">septembre</checkbox-filter>
					<checkbox-filter uid="10-a" @check="filter('months', 'Octobre', $event)"
						:checked="checked('months', 'Octobre')">octobre</checkbox-filter>
					<checkbox-filter uid="11-a" @check="filter('months', 'Novembre', $event)"
						:checked="checked('months', 'Novembre')">novembre</checkbox-filter>
					<checkbox-filter uid="12-a" @check="filter('months', 'Décembre', $event)"
						:checked="checked('months', 'Décembre')">décembre</checkbox-filter>
				</dropdown>
			</div>
		</div>
		<!-- mobile advanced search -->
		<div class="md:hidden flex flex-col w-auto pt-2 justify-center">
			<!-- header -->
			<!-- accordions -->
			<drawer :visible="showDrawer" @close="$emit('closeDrawer')">
				<div class="w-full">
					<accordion title="Choix alimentaire" key="diet" :numberOfItemsSelected="numberOfItemsSelected('diet')">
						<div class="py-4">
							<checkbox-filter uid="Végétalien-a" @check="filter('diet', 'Végétalien', $event)"
								:checked="checked('diet', 'Végétalien')">végétalien</checkbox-filter>
							<checkbox-filter uid="Végétarien-a" @check="filter('diet', 'Végétarien', $event)"
								:checked="checked('diet', 'Végétarien')">végétarien</checkbox-filter>
							<checkbox-filter uid="Omnivore-a" @check="filter('diet', 'Omnivore', $event)"
								:checked="checked('diet', 'Omnivore')">omnivore</checkbox-filter>
						</div>
					</accordion>

					<accordion title="Type de plat" key="category" :numberOfItemsSelected="numberOfItemsSelected('category')">
						<div class="py-4">
							<checkbox-filter uid="Apéritif-a" @check="filter('category', 'Apéritif', $event)"
								:checked="checked('category', 'Apéritif')">apéro</checkbox-filter>
							<checkbox-filter uid="Entrée-a" @check="filter('category', 'Entrée', $event)"
								:checked="checked('category', 'Entrée')">entrée</checkbox-filter>
							<checkbox-filter uid="Plat-a" @check="filter('category', 'Plat', $event)"
								:checked="checked('category', 'Plat')">plat</checkbox-filter>
							<checkbox-filter uid="Accompagnement-a" @check="filter('category', 'Accompagnement', $event)"
								:checked="checked('category', 'Accompagnement')">accompagnement</checkbox-filter>
							<checkbox-filter uid="Dessert-a" @check="filter('category', 'Dessert', $event)"
								:checked="checked('category', 'Dessert')">dessert</checkbox-filter>
							<checkbox-filter uid="Petit déjeuner-a" @check="filter('category', 'Petit déjeuner', $event)"
								:checked="checked('category', 'Petit déjeuner')">petit déjeuner</checkbox-filter>
						</div>
					</accordion>

					<accordion title="Allergies" key="allergies" :numberOfItemsSelected="numberOfItemsSelected('free')">
						<div class="py-4">
							<checkbox-filter uid="Arachide-a" @check="filter('free', 'Arachide', $event)"
								:checked="checked('free', 'Arachide')">arachide</checkbox-filter>
							<checkbox-filter uid="Gluten-a" @check="filter('free', 'Gluten', $event)"
								:checked="checked('free', 'Gluten')">gluten</checkbox-filter>
							<checkbox-filter uid="'Fruit à coque'-a" @check="filter('free', 'Fruit à coque', $event)"
								:checked="checked('free', 'Fruit à coque')">fruit à coque</checkbox-filter>
							<checkbox-filter uid="Oeuf-a" @check="filter('free', 'Oeuf', $event)"
								:checked="checked('free', 'Oeuf')">oeuf</checkbox-filter>
							<checkbox-filter uid="'Produit laitier'-a" @check="filter('free', 'Produit laitier', $event)"
								:checked="checked('free', 'Produit laitier')">produit laitier</checkbox-filter>
							<checkbox-filter uid="Soja-a" @check="filter('free', 'Soja', $event)"
								:checked="checked('free', 'Soja')">soja</checkbox-filter>
						</div>
					</accordion>

					<accordion title="Cuisine" key="cuisine" :numberOfItemsSelected="numberOfItemsSelected('cuisine')">
						<div class="py-4">
							<checkbox-filter uid="Asiatique-a" @check="filter('cuisine', 'Asiatique', $event)"
								:checked="checked('cuisine', 'Asiatique')">asiatique</checkbox-filter>
							<checkbox-filter uid="Américaine-a" @check="filter('cuisine', 'Américaine', $event)"
								:checked="checked('cuisine', 'Américaine')">américaine</checkbox-filter>
							<checkbox-filter uid="Italienne-a" @check="filter('cuisine', 'Italienne', $event)"
								:checked="checked('cuisine', 'Italienne')">italienne</checkbox-filter>
							<checkbox-filter uid="Méditerranéenne-a" @check="filter('cuisine', 'Méditerranéenne', $event)"
								:checked="checked('cuisine', 'Méditerranéenne')">méditerranéenne</checkbox-filter>
							<checkbox-filter uid="Franco-belge-a" @check="filter('cuisine', 'Franco-belge', $event)"
								:checked="checked('cuisine', 'Franco-belge')">franco-belge</checkbox-filter>
							<checkbox-filter uid="Indienne-a" @check="filter('cuisine', 'Indienne', $event)"
								:checked="checked('cuisine', 'Indienne')">indienne</checkbox-filter>
						</div>
					</accordion>
					<accordion title="Saison" key="season" :numberOfItemsSelected="numberOfItemsSelected('months')">
						<div class="grid grid-cols-2 gap-2">
							<div class="py-4">
								<checkbox-filter uid="1-a" @check="filter('months', 'Janvier', $event)"
									:checked="checked('months', 'Janvier')">janvier</checkbox-filter>
								<checkbox-filter uid="2-a" @check="filter('months', 'Février', $event)"
									:checked="checked('months', 'Février')">février</checkbox-filter>
								<checkbox-filter uid="3-a" @check="filter('months', 'Mars', $event)"
									:checked="checked('months', 'Mars')">mars</checkbox-filter>
								<checkbox-filter uid="4-a" @check="filter('months', 'Avril', $event)"
									:checked="checked('months', 'Avril')">avril</checkbox-filter>
								<checkbox-filter uid="5-a" @check="filter('months', 'Mai', $event)"
									:checked="checked('months', 'Mai')">mai</checkbox-filter>
								<checkbox-filter uid="6-a" @check="filter('months', 'Juin', $event)"
									:checked="checked('months', 'Juin')">juin</checkbox-filter>
							</div>
							<div class="py-4">
								<checkbox-filter uid="7-a" @check="filter('months', 'Juillet', $event)"
									:checked="checked('months', 'Juillet')">juillet</checkbox-filter>
								<checkbox-filter uid="8-a" @check="filter('months', 'Août', $event)"
									:checked="checked('months', 'Août')">août</checkbox-filter>
								<checkbox-filter uid="9-a" @check="filter('months', 'Septembre', $event)"
									:checked="checked('months', 'Septembre')">septembre</checkbox-filter>
								<checkbox-filter uid="10-a" @check="filter('months', 'Octobre', $event)"
									:checked="checked('months', 'Octobre')">octobre</checkbox-filter>
								<checkbox-filter uid="11-a" @check="filter('months', 'Novembre', $event)"
									:checked="checked('months', 'Novembre')">novembre</checkbox-filter>
								<checkbox-filter uid="12-a" @check="filter('months', 'Décembre', $event)"
									:checked="checked('months', 'Décembre')">décembre</checkbox-filter>
							</div>
						</div>
					</accordion>
				</div>

				<Spacer size="sm" />

				<div class="flex w-full item-center p-4">
					<button @click="applyFilters"
						class="w-full inline-flex h-16 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Rechercher" v-if="showApplyFiltersButton">
						sauvegarder
					</button>
					<button @click="applyFilters" v-else
						class="w-full inline-flex h-16 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Rechercher">
						sauvegarder
					</button>
				</div>
			</drawer>
		</div>

		<div class="flex flex-col w-full space-y-6">
			<div class="flex flex-col w-full space-y-4">
				<!-- selected filters -->
				<div class="flex flex-row flex-grow gap-4 items-start max-w-[90vw] overflow-auto no-scrollbar"
					v-if="showSelectedFilters">
					<!-- loop on all filter categories -->
					<div v-for="(type, name) in selectedFilters" :key="name" class="flex flex-row gap-3">
						<tag v-for="f in type" class="cursor-pointer" :key="f" look="light"
							@click="removeFromFilters({ type: name, value: f })">
							{{ f.replaceAll("'", "").replaceAll("-", " ") }}
							<span class="inset-y-0 right-0 flex items-center flex-1">
								<svg viewBox="0 0 20 20" class="fill-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.98964 5L10.9148 8.92498L14.84 5L15.8301 5.99002L11.9049 9.915L15.8301 13.84L14.84 14.83L10.9148 10.905L6.98964 14.83L5.99957 13.84L9.92475 9.915L5.99957 5.99002L6.98964 5Z" />
								</svg>
							</span>
						</tag>
					</div>
				</div>
				<div class="flex flex-row my-5 gap-3" v-if="showClearFiltersButton">
					<tag
						class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary cursor-pointer text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						@click="clearFilters()">
						réinitialiser les filtres
					</tag>
				</div>
			</div>
			<div class="w-full flex justify-start">
				<button @click="applyFilters"
					class="w-fit inline-flex h-12 px-3.5 items-center justify-center bg-accent hover:bg-label  text-background border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-base font-sans ligatures-none font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					aria-label="Rechercher" v-if="showApplyFiltersButton">
					appliquer les filtres
				</button>
			</div>
		</div>

	</div>
</template>

<script>
import Dropdown from '~/components/Dropdown.vue'
import Accordion from '~/components/Accordion.vue'
import Drawer from '~/components/Drawer.vue'
import CheckboxFilter from '~/molecules/CheckboxFilter.vue'
import Tag from '~/molecules/ButtonTag.vue'
import Spacer from '~/molecules/Spacer.vue'
import { useSearchStore } from '~/store/search'
import { storeToRefs } from 'pinia'

export default {
	components: {
		Dropdown,
		Accordion,
		CheckboxFilter,
		Tag,
		Drawer,
		Spacer
	},
	props: ['showDrawer'],
	setup() {
		const searchStore = useSearchStore()
		const { searchFilters } = storeToRefs(searchStore)

		return {
			searchStore,
			searchFilters
		}
	},
	computed: {
		selectedFilters() {
			//filter properties which don't contain any value
			return Object.fromEntries(Object.entries(this.filters).filter(([key, value]) => value.length > 0));
		},
		storeFilters() {
			return this.searchFilters;
		}
	},
	data() {
		return {
			filters: {
				diet: [],
				category: [],
				free: [],
				cuisine: [],
				months: [],
				baseRecipe: []
			},
			showApplyFiltersButton: false,
			showSelectedFilters: false,
			showClearFiltersButton: false
		}
	},
	methods: {
		numberOfItemsSelected(type) {
			return this.filters[type].length;
		},
		numberOfAppliedFilters() {
			let total = 0;
			for (const type in this.filters) {
				total += this.filters[type].length;
			}
			return total;
		},
		checked(type, value) {
			if (this.filters && this.filters[type]) {
				//search
				const index = this.filters[type].indexOf(value);
				if (index > -1) {
					return true;
				}
				return false;
			}
		},
		filter(type, value, event, moreValues = []) {
			if (event.target.checked) {
				this.addToFilters({ type, value });
				moreValues.forEach(v => {
					this.addToFilters({ type: type, value: v });
				});
			}
			else {
				this.removeFromFilters({ type, value });
			}
		},
		addToFilters(filter) {
			if (!this.filters[filter.type].includes(filter.value)) {
				this.filters[filter.type].push(filter.value);
			}
			this.showApplyFiltersButton = true;
		},
		removeFromFilters(filter) {
			const index = this.filters[filter.type].indexOf(filter.value);
			if (index > -1) {
				this.filters[filter.type].splice(index, 1);
			}
			this.showApplyFiltersButton = true;
		},
		clearFilters() {
			for (const type in this.filters) {
				this.filters[type] = [];
			}
			this.applyFilters();
		},
		applyFilters() {
			this.searchStore.saveSearchFilters(this.filters);
			this.$emit('filtersChanged');
		}
	},
	watch: {
		storeFilters(newValue, oldValue) {
			this.filters = JSON.parse(JSON.stringify(newValue));
			this.showSelectedFilters = true;
			this.showClearFiltersButton = this.numberOfAppliedFilters() > 0;
			this.showApplyFiltersButton = false;
		}
	}
}
</script>

<style></style>