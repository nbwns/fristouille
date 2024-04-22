<template>
  <div class="w-full">
  	<div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row w-full gap-4">
  		<card-article v-for="c in articles" :key="c.id"
  			image-size=""
  			:path="c.url"
  			:img="c.data.cover.url"
  			:imgAlt="c.data.cover.alt"
  			:title="$prismic.asText(c.data.title)"/>
  	</div>
  </div>
</template>

<script>
export default {
	props: ["articles"]
}
</script>

<style>

</style>