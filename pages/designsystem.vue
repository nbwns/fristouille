<template>
	<div>
		<logo></logo>
		<link-button url="/Recettes">Recettes</link-button>
		<nav-link url="/">Accueil</nav-link>
		<tag look="mint">carotte</tag>
		<tag look="purple">céleri</tag>
		<tag look="gum">tomate</tag>
		<breadcrumb parentText="Accueil" parentUrl="/" childText="Cuisine durable"></breadcrumb>
		<big-title>vive la cuisine durable</big-title>
		<big-title size="8" emphasis="cochon">tout est bon dans le</big-title>
		<normal-title>choucroute</normal-title>
		<normal-title accentColor="true">garnie</normal-title>
		<subtitle>c'est bon ça</subtitle>
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

export default {
	components:{
		Logo,
		LinkButton,
		NavLink,
		Tag,
		Breadcrumb,
		BigTitle,
		NormalTitle,
		Subtitle
	}
}
</script>

<style>

</style>