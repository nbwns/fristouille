<template>
  <section class="grid place-items-center py-[10vh] space-y-10 mx-10 md:mx-0">
      <div	class="flex flex-col w-full md:w-9/12 lg:w-7/12 space-y-3">
        <!-- title row -->
        <div class="flex flex-row justify-between">
          <h3 class=" text-lg font-inter font-semibold text-white-200">
            Apprendre à cuisiner durable
          </h3>
          <a href="#"
            class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300">Tout
            voir</a>
        </div>
        <!-- grid for cards 2-columns -->
        <div
		  class="grid grid-cols-1  md:grid-cols-2  gap-x-4 gap-y-7  md:gap-x-7 md:gap-y-10 w-full place-items-center">
          	<div v-for="(item, index) in items" :key="index">
				<nuxt-link :to="item.featured_page.slug">
					<!-- card -->
					<div class="card">
						<div class="relative">
							<img class="w-full rounded"
								src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
								alt="#">
						</div>
						<div class="pt-2">
							<h4>{{item.featured_title[0].text}}</h4>
							<!-- <p>
								auteur
							</p> -->
						</div>
					</div>
				</nuxt-link>
			  </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
	props: ['items']
}
</script>

<style>

</style>