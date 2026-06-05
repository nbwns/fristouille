<template>
  <div class="flex flex-col space-y-4 w-full">
    <div class="leading-none text-primary-foreground font-sans max-w-sm lowercase">Reçois les dernières recettes et astuces par mail</div>
    <a :href="newsletterUrl" target="_blank"
      class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Je
      m'inscris</a>
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
