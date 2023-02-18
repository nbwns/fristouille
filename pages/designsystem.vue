<template>
	<div class="flex flex-col w-[1400px] gap-12 border-4 border-red-400 mx-auto">
		
		
		
		<logo></logo>
		<hr>

		<!-- <main-navigation/> -->
		
		<link-button path="/Recettes">Recettes</link-button>
		
		<nav-link path="/">Accueil</nav-link>
		
		<tag look="mint">carotte</tag>
		<tag look="purple">céleri</tag>
		<tag look="gum">tomate</tag>
		
		<breadcrumb parentText="Accueil" parentPath="/" childText="Cuisine durable"></breadcrumb>
		
		<big-title>vive la cuisine durable</big-title>
		<big-title size="8" emphasis="cochon">tout est bon dans le</big-title>
		
		<normal-title>choucroute</normal-title>
		<normal-title accentColor="true">garnie</normal-title>
		
		<subtitle>c'est bon ça</subtitle>
		
		<filter></filter>
		
		<search-bar value="courgette" placeholder="Que voulez-vous cuisiner ?"></search-bar>
		
		<dropdown title="Liste">
			<ul>
				<li>bière</li>
				<li>vin</li>
				<li>fromage</li>
			</ul>
		</dropdown>
		
		<accordion title="Régime alimentaire">
			coucou
		</accordion>

		<card-article 
			path="/cuisine-durable"
			img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
			imgAlt="miam"
			title="Cuisine durable"
		></card-article>

		<card-recipe 
			diet="Végétarien"
			img="https://fristouille.blob.core.windows.net/pictures/asperges-vertes-au-citron-salade-de-pommes-de-terre-et-burger-vege_428x336.jpg"
			recipeID="7229"
			slug="asperges-vertes-au-citron-salade-de-pommes-de-terre-et-burger-vege"
			title="Asperges vertes au citron, salade de pommes de terre et burger végé"/>

		<grid-of-cards-recipes></grid-of-cards-recipes>
		
		<custom-container>coucou</custom-container>

		<!-- <footer-links/>
		<mobile-navigation/> -->
	</div>
</template>

<script>
import Logo from '~/molecules/Logo.vue';
import LinkButton from '~/molecules/LinkButton.vue';
import NavLink from '~/molecules/NavLink.vue';
import Tag from '~/molecules/Tag.vue';
import Breadcrumb from '~/molecules/Breadcrumb.vue';
import BigTitle from '~/molecules/BigTitle.vue';
import NormalTitle from '~/molecules/Title.vue';
import Subtitle from '~/molecules/Subtitle.vue';
import Filter from '~/molecules/Filter.vue';
import SearchBar from '~/components/SearchBar.vue';
import Dropdown from '~/components/Dropdown.vue';
import Accordion from '~/components/Accordion.vue';
import CardArticle from '~/components/CardArticle.vue';
import CardRecipe from '~/components/CardRecipe.vue';
import MainNavigation from '~/components/MainNavigation.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
import FooterLinks from '~/components/FooterLinks.vue'
import GridOfCardsRecipes from '~/components/GridOfCardsRecipes.vue';
import CustomContainer from '~/components/CustomContainer.vue';


export default {
	components:{
		Logo,
		LinkButton,
		NavLink,
		Tag,
		Breadcrumb,
		BigTitle,
		NormalTitle,
		Subtitle,
		Filter,
		SearchBar,
		Dropdown,
		Accordion,
		CardArticle,
		MainNavigation,
	  	MobileNavigation,
	  	FooterLinks,
		CardRecipe,
		GridOfCardsRecipes,
		CustomContainer
	}
}
</script>

<style>

</style>