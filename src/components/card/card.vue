<template>
<div class="bee__card">
  <slot name="title">{{ title }}</slot>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import {basicProps} from "../../mixins/props.mixin";

export default {
  name: "BeeCard",
  mixins: [basicProps],
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>
