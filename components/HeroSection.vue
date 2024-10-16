<template>
  <section class="w-full">
    <div class="w-full max-w-2xl text-balance py-10 sm:py-12 ">
      <big-title :emphasis="$prismic.asText(heroTitleEmphasis)">
        {{ $prismic.asText(heroTitle) }}
      </big-title>
    </div>
  </section>
</template>

<script>
import BigTitle from '~/molecules/BigTitle.vue'

export default {
  components: {
    BigTitle,
  },
  props: {
    heroTitle: {
      type: [String, Array],
      required: true
    },
    heroTitleEmphasis: {
      type: [String, Array],
      required: true
    }
  }
}
</script>
