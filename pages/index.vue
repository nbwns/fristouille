<template>
  <div class="">
    <h1 class="text-6xl">la cuisine durable en toute simplicité</h1>
	<horizontal-list title="Recettes du moment" query="hiver" link="hiver" />
	<category-tags />
  </div>
</template>

<script>
import HorizontalList from '~/components/HorizontalList'
import CategoryTags from '~/components/CategoryTags'

export default {
	components: {
		HorizontalList,
		CategoryTags
	},
	data(){
        return{
            
        }
    }
}
</script>
