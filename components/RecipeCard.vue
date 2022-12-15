<template>
	<div class="item">
		<a :href='`/Recette/${searchResult.slug}/${searchResult.objectID}`'>
			<!-- TODO: fix width properly -->
			<div class="card max-w-[250px] px-3">
				<div class="relative">
					<!-- TODO: default image when no picture -->
					<img class="rounded"
						:src="searchResult.pictureMedium"
						alt="#" style="width: 250px">
					<div class="absolute left-0 top-0">
						<div class="flex flex-row justify-between p-2 items-center">
							<div
								class="bg-mint-300 py-1 px-3 uppercase tracking-wider text-white-300 text-xs font-medium rounded-3xl">
								1 tag
							</div>
							<diet-tag :diet="searchResult.diet"/>
						</div>
					</div>
				</div>
				<div class="break-words pt-2">
				<h4>{{ searchResult.name }}</h4>
				<!-- <p>
					auteur
				</p> -->
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import DietTag from './DietTag.vue';

export default {
	props: ['searchResult'],
	components: {DietTag}
}
</script>