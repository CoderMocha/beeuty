<template>
	<span :class="classes"><slot></slot></span>
</template>

<script>
const prefixCls = 'bee__text';

export default {
	name: 'BeeText',
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
					[`bee__text-color-${this.type}`]: !!this.type,
				},
			];
		},
	},
};
</script>
