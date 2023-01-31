<template>
	<div :class="classes"></div>
</template>

<script>
const prefixCls = 'bee__collapse-item';
export default {
	name: 'BeeCollapseItem',
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
