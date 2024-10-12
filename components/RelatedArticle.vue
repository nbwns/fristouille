<template>
  <div class="w-fit noprint">
    <h3 class="title">l'astuce fristouille</h3>
    <card-tip :img="article.data.cover.url" :imgAlt="article.data.cover.alt" :path="article.url"
      :title="$prismic.asText(article.data.title)" :abstract="article.data.tip_abstract" />
  </div>
</template>

<script>
import CardTip from '~/components/CardTip.vue';

export default {
  components: { CardTip },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
