<template>
  <div class="filter-item" @click="selected">
    <div class="checkbox" :class="{'active': checked}" />
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    item: {
      required: true
    },
    filterName: {
      required: true
    }
  },
  computed: {
    checked () {
      return this.$store.getters['filters/filters'].some(filter => filter.value === this.item.value)
    }
  },
  methods: {
    selected (e) {
      (!this.checked) ? this.$emit('tick', this.item) : this.$emit('untick')
    }
  }
}
</script>