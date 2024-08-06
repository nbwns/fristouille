<template>
<div class="w-full">
  	<div class="grid grid-cols-1 grid-flow-row w-full gap-4">
		<hyper-link v-for="c in articles" :key="c.id" :path="c.url">
			{{ $prismic.asText(c.data.title) }}
		</hyper-link>
  	</div>
  </div>
</template>

<script>
import HyperLink from '~/molecules/HyperLink.vue'

export default {
	props: ["articles"],
	components:{
		HyperLink
	}

}
</script>

<style>

</style>