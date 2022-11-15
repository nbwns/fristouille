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
        <vue-horizontal>			
          	<div v-for="(item, index) in items" :key="index">
				<nuxt-link :to="item.featured_page.slug">
					<!-- card -->
					<!-- TODO: fix width properly -->
					<div class="card max-w-[350px] px-3">
						<div class="relative">
							<img class="rounded"
								src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
								alt="#" style="width: 350px">
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
        </vue-horizontal>
      </div>
    </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal';

export default {
	props: ['items'],
	components: {VueHorizontal},
}
</script>

<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}
</style>