<template>
  <header class="flex flex-col space-y-12">
    <!-- <breadcrumb :parentText="parentTitle" :parentPath="parentUrl">
      <prismic-text :field="title" />
    </breadcrumb> -->
    <div class="flex flex-col space-y-6">
      <h1
        class="font-sans text-primary-foreground text-2xl lg:text-4xl font-medium leading-none lowercase text-pretty w-full ">
        <prismic-text :field="title" />
      </h1>
      <h2>
        <prismic-rich-text :field="introduction"
          class="w-full text-pretty prose-p:text-pretty prose-p:text-primary-foreground prose-p:font-light prose-p:lg:font-normal prose-p:font-sans prose-p:text-base prose-p:lg:text-lg prose-p:leading-tight prose-p:ligatures-none" />
      </h2>
    </div>
  </header>
</template>

<script>
import Breadcrumb from '~/molecules/Breadcrumb.vue';

export default {
  name: 'ArticleHeader',
  components: {
    Breadcrumb
  },
  props: {
    title: {
      type: Object,
      required: true
    },
    introduction: {
      type: Object,
      required: true
    },
    parentTitle: {
      type: String,
      required: true
    },
    parentUrl: {
      type: String,
      required: true
    }
  }
}
</script>
