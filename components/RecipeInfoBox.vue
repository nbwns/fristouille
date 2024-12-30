<template>
  <div
    class="w-full flex flex-col leading-none px-4 py-8 lg:px-12 md:py-12 justify-center items-center bg-secondary rounded-[16px] text-center text-foreground">
    <p :class="['w-full', className]">{{ label }}</p>
    <div class="font-sans font-medium text-lg md:text-xl lg:text-2xl text-foreground lowercase">
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
