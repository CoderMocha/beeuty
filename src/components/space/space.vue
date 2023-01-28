<template>
	<div :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__space';

export default {
	name: 'BeeSpace',
	props: {
		direction: String,
		gap: {
			type: Number,
			default: 8,
		},
		align: {
			validate(value) {
				return ['start', 'end', 'center', 'baseline', 'stretch'].includes(value);
			},
		},
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-align-${this.align}`]: !!this.align,
				},
			];
		},
		styles() {
			let style = {};
			if (this.gap) {
				style = {
					gap: this.gap + 'px',
				};
			}
			return style;
		},
	},
};
</script>
