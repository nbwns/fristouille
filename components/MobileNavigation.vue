<template>
	<!-- Main container for mobile navigation -->
	<div
		class="fixed bottom-0 w-full py-15 bg-black-300 bg-opacity-75 dark:bg-white-300 dark:bg-opacity-95 md:hidden noprint">
		<!-- Navigation items container -->
		<div class="flex flex-row items-center justify-between gap-5 p-5 ">
			<NavItem to="/" icon="home" label="accueil" exact="exact" />
			<NavItem to="/recettes" icon="recipe" label="recettes" />
			<NavItem to="/astuces" icon="tips" label="astuces" />
			<div class="flex flex-col items-center gap-3">
				<div @click="popupOpen = !popupOpen" class="cursor-pointer navmobile">
					<svg class="h-8 mx-auto fill-white-100 dark:fill-black-100" viewBox="0 0 25 25"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.5013 9.75C12.14 9.75 11.7822 9.82116 11.4484 9.95943C11.1146 10.0977 10.8113 10.3003 10.5558 10.5558C10.3003 10.8113 10.0977 11.1146 9.95943 11.4484C9.82116 11.7822 9.75 12.14 9.75 12.5013C9.75 12.8625 9.82116 13.2203 9.95943 13.5541C10.0977 13.8879 10.3003 14.1912 10.5558 14.4467C10.8113 14.7022 11.1146 14.9048 11.4484 15.0431C11.7822 15.1813 12.14 15.2525 12.5013 15.2525C13.2309 15.2523 13.9307 14.9623 14.4465 14.4462C14.9623 13.9302 15.252 13.2303 15.2519 12.5006C15.2517 11.7709 14.9617 11.0712 14.4456 10.5554C13.9295 10.0395 13.2297 9.74983 12.5 9.75H12.5013ZM3.75125 9.75C3.38995 9.75 3.03219 9.82116 2.69839 9.95943C2.3646 10.0977 2.0613 10.3003 1.80582 10.5558C1.55035 10.8113 1.34769 11.1146 1.20943 11.4484C1.07116 11.7822 1 12.14 1 12.5013C1 12.8625 1.07116 13.2203 1.20943 13.5541C1.34769 13.8879 1.55035 14.1912 1.80582 14.4467C2.0613 14.7022 2.3646 14.9048 2.69839 15.0431C3.03219 15.1813 3.38995 15.2525 3.75125 15.2525C4.48093 15.2523 5.18065 14.9623 5.69649 14.4462C6.21234 13.9302 6.50204 13.2303 6.50187 12.5006C6.50171 11.7709 6.21169 11.0712 5.69561 10.5554C5.17953 10.0395 4.47968 9.74983 3.75 9.75H3.75125ZM21.2513 9.75C20.89 9.75 20.5322 9.82116 20.1984 9.95943C19.8646 10.0977 19.5613 10.3003 19.3058 10.5558C19.0503 10.8113 18.8477 11.1146 18.7094 11.4484C18.5712 11.7822 18.5 12.14 18.5 12.5013C18.5 12.8625 18.5712 13.2203 18.7094 13.5541C18.8477 13.8879 19.0503 14.1912 19.3058 14.4467C19.5613 14.7022 19.8646 14.9048 20.1984 15.0431C20.5322 15.1813 20.89 15.2525 21.2513 15.2525C21.9809 15.2523 22.6807 14.9623 23.1965 14.4462C23.7123 13.9302 24.002 13.2303 24.0019 12.5006C24.0017 11.7709 23.7117 11.0712 23.1956 10.5554C22.6795 10.0395 21.9797 9.74983 21.25 9.75H21.2513Z" />
					</svg>
					<span class="text-sm font-medium text-white-100 dark:!text-black-100 font-anonymous">
						plus
					</span>
				</div>
			</div>
		</div>

		<!-- Popup menu for additional options -->
		<div v-show="popupOpen" class="fixed top-0 left-0 w-full h-screen bg-black-300 dark:bg-white-300 font-labil">
			<div class="flex flex-col h-full space-y-12">
				<!-- Header with logo and close button -->
				<div class="flex justify-between">
					<logo class="px-6 pt-3" />
					<div class="inline-flex items-center p-5 cursor-pointer navmobile close" @click="popupOpen = !popupOpen">
						<svg class="h-8 mx-auto" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M41.0793 19L29.5 30.5793L17.9207 19L15 21.9207L26.5793 33.5L15 45.0793L17.9207 48L29.5 36.4207L41.0793 48L44 45.0793L32.4207 33.5L44 21.9207L41.0793 19Z"></path>
						</svg>
					</div>
				</div>
				<!-- List of additional menu items -->
				<ul class="flex flex-col w-full px-6 space-y-2 text-xl list-none">
					<PopupMenuItem href="https://forms.fillout.com/t/tAiagUtQpwus" target="_blank" label="Ajouter une recette" />
					<PopupMenuItem to="/a-propos" label="À propos" />
					<PopupMenuItem href="/a-propos/services" label="Services" />
					<PopupMenuItem href="/a-propos/contact" label="Contact" />
				</ul>
				<div class="flex-grow"></div>
				<div class="p-6">
					<dark-mode-toggle />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/molecules/Logo.vue'
import NavItem from '~/components/NavItem.vue'
import PopupMenuItem from '~/components/PopupMenuItem.vue'
import DarkModeToggle from '~/components/DarkModeToggle.vue'

export default {
	components: {
		Logo,
		NavItem,
		PopupMenuItem,
		DarkModeToggle
	},
	data() {
		return {
			popupOpen: false
		}
	},
	methods: {
		// Close popup when clicking on a link
		close(e) {
			if (e.target.tagName === "A") {
				this.popupOpen = false
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

<style scoped>
.navmobile {
	@apply text-white-100 dark:text-black-100 hover:text-white-300 dark:hover:text-black-300 transition-colors duration-200;
}

.navmobile.nuxt-link-exact-active {
	@apply text-orange-300;
}

.navmobile.nuxt-link-exact-active svg {
	@apply fill-orange-300;
}
</style>