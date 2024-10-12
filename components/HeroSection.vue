<template>
  <section>
    <div class="flex flex-col justify-center items-center bg-background">
      <div class="flex flex-col md:flex-row layer__xl justify-between items-center h-auto mx-auto">
        <div class="block z-0 items-center h-full max-w-lg text-balance py-10 sm:py-12">
          <big-title :emphasis="$prismic.asText(heroTitleEmphasis)">
            {{ $prismic.asText(heroTitle) }}
          </big-title>
        </div>
        <!-- SVG image code can be added here if needed -->
      </div>
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
      type: String,
      required: true
    },
    heroTitleEmphasis: {
      type: String,
      required: true
    }
  }
}
</script>
