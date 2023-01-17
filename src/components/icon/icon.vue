<template>
<i class="beeicon" :class="classes"></i>
</template>

<script>
export default {
  name: "BeeIcon",
  props: {
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        `bee-${this.icon}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
