<template>
	<div :class="classes"></div>
</template>

<script>
const prefixCls = 'bee__footer';

export default {
	name: 'BeeFooter',
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
