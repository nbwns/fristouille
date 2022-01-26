<template>
	<div class="border-2 p-3 rounded-lg m-3">
		<a :href='`/Recette/${searchResult.slug}/${searchResult.objectID}`'><img :src="searchResult.pictureSmall"/>{{ searchResult.name }}</a>
	</div>
</template>

<script>
export default {
	props: ['searchResult']
}
</script>

<style>

</style>