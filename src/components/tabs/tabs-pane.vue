<template>
<div v-show="currentShow" :class="classes"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__tabs-pane';
export default {
  name: "BeeTabsPane",
  props: {
    name: String,
    label: String,
  },
  data() {
    return {
      currentShow: false,
    }
  },
  computed: {
    classes() {
      return [prefixCls];
    }
  }
}
</script>
