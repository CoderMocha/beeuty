<template>
<div class="bee__card">
  <div class="bee__card-head">
    <h3 class="title">
      <slot name="title">{{ title }}</slot>
    </h3>
    <div class="extra">
      <slot name="extra"></slot>
    </div>
  </div>
  <div class="bee__card-content">
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
