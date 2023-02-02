<template>
	<span :class="classes">
		<span><slot></slot></span>
		<span>/</span>
	</span>
</template>

<script>
const prefixCls = 'bee__breadcrumb-item';
export default {
	name: 'BeeBreadcrumbItem',
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
