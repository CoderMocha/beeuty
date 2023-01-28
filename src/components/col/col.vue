<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>

import {findComponentUpward} from "../../utils/assist";

const prefixCls = 'bee__col';

export default {
  name: "BeeCol",
  props: {
    span: [Number, String],
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    classes() {
      const classList = [
        prefixCls,
        {
          [`${prefixCls}-span-${this.span}`]: this.span,
        }
      ];
      return classList;
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        };
      }
      return style;
    }
  },
  methods: {
    updateGutter() {
      const Row = findComponentUpward(this, 'BeeRow');
      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    }
  },
  mounted() {
    this.updateGutter();
  },
  beforeDestroy() {
    this.updateGutter();
  }
}
</script>
