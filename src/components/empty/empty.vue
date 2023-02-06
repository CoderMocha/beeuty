<template>
  <div :class="classes">
    <img src="" alt="">
    <div :class="[`${prefixCls}-description`]">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'bee__empty';

export default {
  name: 'BeeEmpty',
  props: {
    description: {
      type: String,
      default: '暂无数据'
    },
  },
  data() {
    return {
      prefixCls,
    }
  },
  computed: {
    classes() {
      return [prefixCls];
    }
  },
}
</script>

