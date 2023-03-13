<template>
  <div class="flex flex-wrap md:flex-nowrap gap-10">
	<card-article v-for="c in articles" :key="c.id"
		image-size=""
		:path="c.url"
		:img="c.data.cover.url"
		:imgAlt="c.data.cover.alt"
		:title="$prismic.asText(c.data.title)"/>
  </div>
</template>

<script>
export default {
	props: ["articles"]
}
</script>

<style>

</style>