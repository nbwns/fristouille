<template>
	<nav class="hidden md:flex">
		<ol class="flex items-center list-none">
			<li>
				<nuxt-link :to="parentPath" class="breadcrumb-main text-usual">
					<prismic-text v-if="(typeof(parentText)) !== 'string'" :field="parentText" />
					<span v-else>{{ parentText }}</span>
				</nuxt-link>
			</li>
			<li>
				<svg class="w-6 pl-2"  viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.94385 7.50896C5.54385 0.708955 12.4439 6.34229 15.4439 10.009C18.1102 10.009 23.5429 11.209 23.9429 16.0093C24.4429 22.0096 10.9439 30.5093 7.94385 29.5093C4.94385 28.5093 -2.55615 16.009 1.94385 7.50896Z"
							fill="#D03030" />
						<path
							d="M7.94383 25.0093C5.54383 23.4093 2.27716 14.6759 0.943826 10.5093C-2.55617 19.5093 5.44383 29.0093 7.94383 30.0093C9.94383 30.8093 15.1105 27.0093 17.4438 25.0093C15.2772 25.6759 10.3438 26.6093 7.94383 25.0093Z"
							fill="#D03030" />
						<path
							d="M8.94287 6.09635C8.94287 7.81506 12.3815 10.6318 14.1008 11.8254C20.2902 12.9712 22.5744 8.48344 22.9429 6.09635H17.4166L18.8902 1.08347L14.1008 6.09635L12.2587 0.00927734L11.5218 5.02216L8.94287 1.08347V6.09635Z"
							fill="#0C7945" />
					</svg>
			</li>
			<li class="breadcrumb-next">
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