<template>
  <div
    class="w-full flex flex-col leading-none p-4 justify-center items-center bg-black-100 dark:bg-white-100 rounded-md text-center">
    <p :class="['w-full', className]">{{ label }}</p>
    <div class="title-paragraph">
      <slot name="content">{{ value }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
