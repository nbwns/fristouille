<template>
  <section class="flex w-full items-center mx-auto justify-center py-10 ">
    <div class="w-full flex flex-col space-y-3">
      <!-- title row -->
      <div class="w-full flex flex-row justify-between items-end">
        <title-paragraph>
          {{ title }}
        </title-paragraph>

        <hyper-link v-if="link" :path="link">Tout voir</hyper-link>
      </div>
      <!-- grid for cards 2-columns -->
      <ssr-carousel loop :slides-per-page='2' :gutter='15' show-arrows peek-right='10%' pagination-label="élément" :responsive='[
        {
          maxWidth: 1280,
          slidesPerPage: 2,
          gutter: 20,
        },
        {
          maxWidth: 1024,
          slidesPerPage: 2,
          gutter: 10,
        },
        {
          maxWidth: 640,
          slidesPerPage: 1,
          gutter: 10,
        }
      ]'>
        <div class="slide" v-for="c in items" :key="c.id">
          <card-article image-size="" :path="c.url" :img="c.data.cover.url" :imgAlt="c.data.cover.alt"
            :title="$prismic.asText(c.data.title)" />
        </div>
      </ssr-carousel>
    </div>
  </section>
</template>

<script>
import TitleParagraph from '~/molecules/TitleParagraph.vue';
import HyperLink from '~/molecules/HyperLink.vue';
import SsrCarousel from 'vue-ssr-carousel';
import CardArticle from './CardArticle.vue';


export default {
  props: ['title', 'items', 'link'],
  components: { TitleParagraph, HyperLink, SsrCarousel, CardArticle },
}
</script>

<style global>
.ssr-carousel-track {
  @apply justify-start
}

.ssr-carousel-back-icon, .ssr-carousel-next-icon {
  @apply !bg-purple-200
}

:not([aria-disabled])>.ssr-carousel-back-icon, :not([aria-disabled])>.ssr-carousel-next-icon {
  @apply opacity-75
}

.ssr-carousel-next-button {
  @apply -right-6 hidden sm:block
}

.ssr-carousel-back-button {
  @apply -left-6 hidden sm:block
}
</style>
