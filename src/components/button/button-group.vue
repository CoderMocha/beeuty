<script>
import {basicProps} from "../../mixins/props.mixin";

export default {
  name: "BeeButtonGroup",
  mixins: [basicProps],
  props: {
    // 幽灵
    ghost: {
      type: Boolean,
      default: false,
    },
    // 圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 朴素
    plain: {
      type: Boolean,
      default: false,
    },
    // 虚线
    dashed: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement, context) {
    return createElement('div', {
      class: [
        'bee__button-group',
      ],
    }, this.$slots.default)
  },
}
</script>
