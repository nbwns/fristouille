<template>
	<div class="flex flex-col m-w-[1400px] gap-12 border-4 border-red-400 mx-auto p-4">
		
<!-- M O L E C U L E S -->

		<!-- Logo -->
		<p class="ds-label">logo</p>
		
		<logo></logo>
		
		<hr>

		<!-- Button -->
		<p class="ds-label">Bouton principal</p>
	
		<link-button path="#" class="sm"> click me</link-button>
		<link-button path="#" class="md"> click me</link-button>
		<link-button path="#" class="lg"> click me</link-button>
		<link-button path="#" class="xl"> click me</link-button>
		
		<hr>

		<!-- Navlink -->
		<p class="ds-label">Navlink</p>

		<nav-link path="#" >Navlink</nav-link>
		
		<hr>

		<!-- Tag -->
		<p class="ds-label">Tag</p>

		<div class="flex flex-row space-x-5">
			<tag look="pink">végétarien</tag>
			<tag look="red">carnivore</tag>
			<tag look="green">omnivore</tag>
		</div>

		<hr>

		<!-- Breadcrumbs -->
		<p class="ds-label">BreadCrumbs</p>		
		
		<breadcrumb parentText="Accueil" parentPath="/">Cuisine durable</breadcrumb>

		<hr>

		<!-- Text variation {BigTitle, Title, TitleArticle, TitleParagraph } -->
		<p class="ds-label">BigTitle, Title, TitleArticle, TitleParagraph || h1, h2, h3, h4</p>		
		<big-title :size="4" emphasis="ready">The fox is</big-title>	
		<normal-title>The fox is ready</normal-title>
		<title-article>The fox is ready</title-article>
		<title-paragraph>The fox is ready</title-paragraph>
		
		<hr>

		<!-- Checkbox filter -->
		<p class="ds-label">Checkbox filter</p>		
		<checkbox-filter>Checkbox filter</checkbox-filter>

		<hr>
		<!-- search bar -->
		<p class="ds-label">search bar</p>		
		<search-bar value="courgette" placeholder="Que voulez-vous cuisiner ?"></search-bar>
		

		<hr>
		<!-- accordéon -->
		<p class="ds-label">accordéon</p>	
		<accordion title="Régime alimentaire">
			coucou
		</accordion>

		<hr>
		<!-- Dropdown with list -->
		<p class="ds-label">Dropdown with list</p>
		
		<dropdown title="Liste">
			<!-- you can map aroun an ul and li element if needed -->
			<checkbox-filter>Bières</checkbox-filter>
			<checkbox-filter>Vins</checkbox-filter>
			<checkbox-filter>Fromage</checkbox-filter>
		</dropdown>

		<hr>
		<!-- Card Article -->
		<p class="ds-label">Card Article</p>
		
		<!-- width props only for the example on design system — leave usually undefined (default behavior is set to width full
			The size of the card should be define by the row and number or element in there ... ) -->
		<div class="flex flex-wrap md:flex-nowrap gap-10">
			<card-article
				image-size=""
				path="/cuisine-durable"
				img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
				imgAlt="miam"
				title="Cuisine durable"
			></card-article>
			<card-article
				image-size=""
				path="/cuisine-durable"
				img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
				imgAlt="miam"
				title="Cuisine durable"
			></card-article>
			<card-article
				image-size=""
				path="/cuisine-durable"
				img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
				imgAlt="miam"
				title="Cuisine durable"
			></card-article>
		</div>

		<hr>
		<!-- Card Recipe -->
		<p class="ds-label">Card Recipe</p>

		<card-recipe 
			width="max-w-full"
			diet="Végétarien"
			img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
			recipeID="7229"
			slug="asperges-vertes-au-citron-salade-de-pommes-de-terre-et-burger-vege"
			title="Asperges vertes au citron, salade de pommes de terre et burger végé"
			author="Nicolas"
			:tags="['facile', 'rapide']"
			/>

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
import TitleArticle from '~/molecules/TitleArticle.vue';
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import CheckboxFilter from '~/molecules/CheckboxFilter.vue';
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
		TitleArticle,
		TitleParagraph,
		CheckboxFilter,
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