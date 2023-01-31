<template>
	<span :class="classes"><slot></slot></span>
</template>

<script>
const prefixCls = 'bee__heading';

export default {
	name: 'BeeHeading',
	props: {
		type: {
			validate(value) {
				return ['default', 'success', 'info', 'warning', 'error'].includes(value);
			},
			default: 'default',
		},
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-type-${this.type}`]: !!this.type,
				},
			];
		},
	},
};
</script>
