<template>
  <div class="py-12">
    <div v-for="c in ingredients" :key="c.name" class="py-0.5">
      <div v-if="c.ingredient[0]" class="font-mono text-base leading-tight text-foreground font-light flex flex-wrap space-x-1">
        <div class="font-bold flex space-x-1" v-if="c.quantity > 0">
          <span>{{ computedQuantity(c.quantity) }}&nbsp;</span>
          <span v-if="c.units != 'pièce'">{{ c.units }} <span class="font-light">de </span></span>
        </div>
        <div>
          <span>{{ c.ingredient }}</span>
          <i>{{ c.remark }}</i>
          <span v-if="c.quantity == 0">selon votre goût</span>
          <span v-if="c.optional">(facultatif)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true
    },
    servingsRatio: {
      type: Number,
      required: true
    }
  },
  methods: {
    computedQuantity(qty) {
      return Math.round((qty * this.servingsRatio) * 2) / 2;
    }
  }
}
</script>
