<template>
	<div :class="classes"><slot /></div>
</template>

<script>
const prefixCls = 'bee__layout';

export default {
	name: 'BeeLayout',
	props: {},
	data() {
		return {
			hasAside: false,
		};
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-vertical`]: !this.hasAside,
				},
			];
		},
	},
};
</script>
