<template>
<div class="bee__tag" :class="classes" @click="onClick">
  <slot></slot>
  <div v-if="closeable" class="button-close" @click.stop="onClose">
    <bee-icon icon="close" />
  </div>
</div>
</template>

<script>
import {basicProps} from "../../mixins/props.mixin";

export default {
  name: "BeeTag",
  mixins: [basicProps],
  props: {
    closeable: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return [
        `bee__tag-size-${this.size}`,
        `bee__tag-type-${this.type}`,
        {
          closeable: this.closeable,
          bordered: this.bordered,
        }
      ]
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    onClose() {
      this.$emit('close');
    }
  }
}
</script>
