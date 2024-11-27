<template>
  	<nuxt-link :to="to"
		class="!text-sm lg:h-8 hover:bg-foreground hover:text-background transition-all duration-300 hover:cursor-pointer hover:scale-110 flex items-center py-1 px-2 rounded-[999px] max-w-fit w-max bg-label text-primary font-mono font-medium text-xs h-10">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: ['to']
}
</script>

<style>

</style>