<template>
  <div class="flex flex-col space-y-4 w-full">
    <div class="leading-none text-primary-foreground font-sans text-xl max-w-sm">Inscrivez-vous à notre newsletter</div>
    <a :href="newsletterUrl" target="_blank"
      class="w-fit inline-flex h-8 px-3.5 tracking-wide items-center justify-center bg-secondary hover:bg-primary  text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium ring-offset-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Je
      m'inscris</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsletterUrl: 'https://02419efa.sibforms.com/serve/MUIFANEEQaGtCgMgGCIlj2MVYkNzVFJUOIB748mFzklKSTLMB5SqGgeNJGfdWP2nfl5TY1DfHscl4Rho1564zy-CsKAO8fOTDdqL4V00DXsJw3rpUEOYb83wRl5SAmNoHwuKQNYJZPSn5zfCKhJAOF1tnNRe6iXiEyO05SsgpC9hDclYYf0u1A1hw89TBmypEx_lNOwyIBbwmr4s'
    }
  }
}
</script>
