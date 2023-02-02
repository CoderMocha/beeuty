<template>
	<div :class="classes"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__menu';

export default {
	name: 'BeeMenu',
	props: {
		mode: {
			validate(value) {
				return ['horizontal', 'vertical'].includes(value);
			},
			default: 'vertical',
		},
	},
	data() {
		return {};
	},
	computed: {
		classes() {
			return [prefixCls, `${prefixCls}-mode-${this.mode}`];
		},
	},
};
</script>
