<template>
	<a :href='`/Recette/${searchResult.slug}/${searchResult.objectID}`'>
		<div class="card">
            <div class="relative">
              <img class="w-full rounded"
                :src="searchResult.pictureSmall"
                alt="#">
              <div class="absolute left-0 top-0 w-full">
                <div class="flex flex-row justify-between p-2 items-center">
                  <div
                    class="bg-mint-300 py-1 px-3 uppercase tracking-wider text-white-300 text-xs font-medium rounded-3xl">
                    végétariens
                  </div>
                  <div
                    class="bg-gum-300 py-1 px-3 uppercase tracking-wider text-white-300 text-xs font-medium rounded-3xl">
                    <svg class="w-5 h-5 text-white-200  " fill="none" viewBox="0 0 25 25"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M15.625 11.524C13.0521 14.2187 10.4781 20.8333 10.4781 20.8333C10.4781 20.8333 6.80104 11.5229 3.125 9.375"
                        stroke="currentColor" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd"
                        d="M21.3501 5.80948L21.7939 10.4178C22.0814 13.4074 19.8407 16.0689 16.8512 16.3574C13.9178 16.6386 11.2605 14.4949 10.9782 11.5616C10.911 10.864 10.9818 10.1601 11.1867 9.48994C11.3915 8.81979 11.7263 8.19655 12.1721 7.65583C12.6178 7.1151 13.1657 6.66748 13.7845 6.33853C14.4032 6.00957 15.0807 5.80573 15.7782 5.73864L20.6907 5.26573C20.7697 5.25811 20.8495 5.26614 20.9254 5.28935C21.0013 5.31256 21.0719 5.35049 21.1331 5.40099C21.1943 5.45148 21.245 5.51355 21.2822 5.58364C21.3195 5.65373 21.3425 5.73047 21.3501 5.80948V5.80948Z"
                        stroke="currentColor" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class=" pt-2">
              <h4>{{ searchResult.name }}</h4>
              <!-- <p>
                auteur
              </p> -->
            </div>
          
		</div>
	</a>
</template>

<script>
export default {
	props: ['searchResult']
}
</script>

<style>

</style>