<template>
  <div>
    <a :href="ecoIndexUrl" target="_blank">
      <img :src="badgeUrl" alt="Ecoindex Badge" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ecoIndexUrl: 'https://bff.ecoindex.fr/redirect/?url=https://fristouille.netlify.app',
      badgeUrl: 'https://bff.ecoindex.fr/badge/?theme=dark&url=https://fristouille.netlify.app'
    }
  }
}
</script>
