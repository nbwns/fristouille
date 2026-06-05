<template>
    <div class="flex flex-col md:flex-row w-full rounded-md bg-secondary group border border-primary-foreground/10 hover:border-primary-foreground/20 transition-colors duration-300 overflow-hidden">
        <div class="flex flex-col justify-between px-6 py-5 w-full">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h2 class="text-foreground text-lg leading-tight font-demi ligatures-none lowercase">
                Tu as aimé cette recette ?
                </h2>
                <p class="text-sm text-foreground/80 font-light pt-2">
                Reçois les nouvelles recettes de saison et les astuces Fristouille directement dans ta boîte mail. Maximum 1 par mois. Pas d'embrouille, juste de la tambouille.
                </p>
            </div>
            
            <a :href="newsletterUrl" target="_blank" class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:focus-visible:ring-purple-300 focus-visible:ring-offset-2 shrink-0">
                Je m'inscris
            </a>
            </div>
        </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      newsletterUrl: 'https://02419efa.sibforms.com/serve/MUIFAKzCBftJC59sQ2sq-uOi1ulcEwo7WlcPj_2_8YzBItB50NangSBi86zGS8x-hvWBtKOp3lzNpnmNYBLB9DEqYyDK9vLbIIb7TzceWsFnd2FVngLPF9ubb0RU9AbvBrECjrHZ1XwYS5LxW5-nG3iWgDW3pEH5DNmaErC16m54vkJU8x7fpFDj1eVthNeVjzLX7tjKeezt25yb'
    }
  }
}
</script>