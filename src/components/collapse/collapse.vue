<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
const prefixCls = 'bee__collapse';
export default {
	name: 'BeeCollapse',
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
