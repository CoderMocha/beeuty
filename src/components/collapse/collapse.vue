<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
const prefixCls = 'bee__collapse';
export default {
	name: 'BeeCollapse',
	props: {
		accordion: Boolean,
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
	mounted() {},
};
</script>
