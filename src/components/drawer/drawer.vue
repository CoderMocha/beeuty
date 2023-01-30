<template>
	<div :class="classes"></div>
</template>

<script>
const prefixCls = 'bee__drawer';
export default {
	name: 'BeeDrawer',
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
