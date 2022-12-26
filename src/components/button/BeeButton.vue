<template>
  <div class="bee-button" :class="classes">
    <slot name="prefix">
      <div class="prefix"></div>
    </slot>
    <div class="label">
      <slot></slot>
    </div>
    <slot name="suffix">
      <div class="suffix"></div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BeeButton",
  props: {
    size: {
      type: String,
      default: 'middle',
    },
    type: {
      type: String,
      default: 'normal',
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `size-${this.size}`,
        `type-${this.type}`,
        {
          ghost: this.ghost,
          round: this.round,
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bee-button{
  display: inline-flex;
  cursor: pointer;
  &.size-small{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 14px;
  }
  &.size-middle{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding: 0 16px;
  }
  &.size-large{
    height: 80px;
    line-height: 80px;
    font-size: 18px;
    padding: 0 18px;
  }
  &.type-normal{

  }
  &.type-info{

  }
  &.type-warning{

  }
  &.type-danger{

  }
}
</style>
