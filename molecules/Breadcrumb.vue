<template>
	<nav class="hidden md:flex">
		<ol class="flex flex-wrap justify-center items-center list-none gap-2">
			<li>
				<nuxt-link :to="parentPath"
					class="text-foreground hover:cursor-pointer hover:underline focus:text-accent text-xs font-medium font-mono leading-none tracking-tighter">
					<prismic-text v-if="(typeof (parentText)) !== 'string'" :field="parentText" />
					<div v-else>{{ parentText }}</div>
				</nuxt-link>
			</li>
			<li>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.58616 5.58606C8.21122 5.96112 8.00059 6.46973 8.00059 7.00006C8.00059 7.53039 8.21122 8.03901 8.58616 8.41406L12.1712 12.0001L8.58616 15.5861C8.39514 15.7706 8.24278 15.9912 8.13796 16.2353C8.03314 16.4793 7.97797 16.7417 7.97566 17.0073C7.97335 17.2728 8.02396 17.5362 8.12452 17.782C8.22508 18.0278 8.37359 18.2511 8.56137 18.4389C8.74916 18.6266 8.97246 18.7751 9.21825 18.8757C9.46405 18.9763 9.72741 19.0269 9.99296 19.0246C10.2585 19.0223 10.521 18.9671 10.765 18.8623C11.009 18.7574 11.2297 18.6051 11.4142 18.4141L17.8292 12.0001L11.4142 5.58606C11.0391 5.21112 10.5305 5.00049 10.0002 5.00049C9.46983 5.00049 8.96122 5.21112 8.58616 5.58606Z"
						fill="black" />
				</svg>

			</li>
			<li
				class="text-foreground hover:cursor-pointer hover:underline focus:text-accent text-xs font-medium font-mono leading-none tracking-tighter">
				<slot></slot>
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	props: ["parentText", "parentPath"]
}
</script>

<style></style>