<template>
	<div :class="classes"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__content';

export default {
	name: 'BeeContent',
	props: {},
	data() {
		return {};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
