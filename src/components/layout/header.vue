<template>
	<div :class="classes"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__header';

export default {
	name: 'BeeHeader',
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
