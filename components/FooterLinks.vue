<template>
	<footer class="bg-primary pt-16">
		<div class="hidden md:flex mx-10 md:mx-0 mb-10">
			<div class="flex flex-col layer__xl space-y-[63px] items-center mx-auto justify-center">
				<!-- Footer columns -->
				<div class="wrap-sublink">
					<footer-column v-for="(column, index) in footerColumns" :key="index" :links="column" />
				</div>

				<!-- Logo and social links -->
				<div class="flex flex-col justify-center items-center w-full sm:w-1/3 ">
					<a href="#" class="hover:cursor-pointer">
						<Logo
							class="w-full mr-0 justify-center text-accent hover:text-secondary-foreground transition-colors duration-300" />
					</a>
					<div class="flex flex-row justify-center w-6/12 items-center space-x-4">
						<social-icon v-for="icon in socialIcons" :key="icon.name" :icon="icon" />
					</div>
				</div>

				<!-- Newsletter, toggle, and ecoindex -->
				<div class="flex flex-col sm:flex-row sm:justify-between w-full">
					<newsletter-signup />
					<div class="flex flex-col justify-end w-full">
						<div class="flex flex-col justify-end items-end gap-3 text-accent">
							<eco-index-badge />
							<dark-mode-toggle />
						</div>
						<p class="text-sm text-right pt-3 text-label">copyright ©fristouille {{ currentYear }} safdsa</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue';
import FooterColumn from './FooterColumn.vue';
import SocialIcon from './SocialIcon.vue';
import NewsletterSignup from './NewsletterSignup.vue';
import EcoIndexBadge from './EcoIndexBadge.vue';
import Logo from '~/molecules/Logo.vue';
export default {
	components: {
		Logo,
		DarkModeToggle,
		FooterColumn,
		SocialIcon,
		NewsletterSignup,
		EcoIndexBadge
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
