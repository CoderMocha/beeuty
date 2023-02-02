<template>
	<div :class="classes"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__breadcrumb';
export default {
	name: 'BeeBreadcrumb',
	props: {
		separator: {
			type: String,
			default: '/',
		},
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
