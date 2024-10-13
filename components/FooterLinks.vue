<template>
	<footer class="w-full bg-primary pt-16 container d-1">
		<div class="w-full hidden md:flex md:flex-col md:justify-center mx-10 md:mx-0 mb-10">
			<div class="w-full flex flex-col space-y-10 items-center mx-auto justify-center">

				<!-- Logo and social links -->
				<div class="flex flex-col justify-center items-center w-full sm:w-1/3 ">
					<Logo class="flex w-full items-center justify-center" />

					<div class="flex flex-row justify-center w-6/12 items-center space-x-4">
						<social-icon v-for="icon in socialIcons" :key="icon.name" :icon="icon" />
					</div>
				</div>

				<!-- Footer columns -->
				<div class="wrap-sublink">
					<footer-column v-for="(column, index) in footerColumns" :key="index" :links="column" />
				</div>



				<!-- Newsletter, toggle, and ecoindex -->
				<div class="flex flex-col sm:flex-row sm:justify-between w-full">
					<newsletter-signup />
					<div class="flex flex-col justify-end items-end w-full space-y-2">
						<div class="flex flex-row justify-end  space-x-2 items-center">
							<eco-index-badge />
						</div>
						<dark-mode-toggle />
					</div>
				</div>
			</div>
			<div class="w-full mt-6 mb-2 h-[1px] bg-primary-foreground/10" />
			<p
				class="w-full flex items-center justify-center font-sans font-light ligatures-none tracking-wide text-xs text-alt">
				copyright ©fristouille {{ currentYear }}
			</p>
		</div>
	</footer>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue';
import FooterColumn from './FooterColumn.vue';
import SocialIcon from './SocialIcon.vue';
import NewsletterSignup from './NewsletterSignup.vue';
import EcoIndexBadge from './EcoIndexBadge.vue';
import Logo from '../molecules/Logo.vue';
export default {
	components: {
		DarkModeToggle,
		FooterColumn,
		SocialIcon,
		NewsletterSignup,
		EcoIndexBadge,
		Logo
	},
	data() {
		return {
			footerColumns: [
				[
					{ text: 'Ajouter une recette', url: 'https://forms.fillout.com/t/tAiagUtQpwus', external: true },
					{ text: 'Recettes par catégories', url: '/recettes-categories', external: false }
				],
				[
					{ text: 'À propos', url: '/a-propos', external: false },
					{ text: 'Services pour entreprises', url: 'https://fristouille.super.site/', external: true }
				],
				[
					{ text: 'Mentions légales', url: '/a-propos/mentions-legales', external: false },
					{ text: 'Déclaration d\'accessibilité', url: '/a-propos/accessibilite', external: false }
				]
			],
			socialIcons: [
				{ name: 'email', url: 'mailto:bonjour@fristouille.org' },
				{ name: 'instagram', url: '#' },
				{ name: 'facebook', url: 'https://www.facebook.com/fristouille.org' }
			]
		}
	},
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
}
</script>
