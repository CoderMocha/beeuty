<template>
	<div :class="classes">
		<div :class="[`${prefixCls}-mask`]"></div>
		<div :class="[`${prefixCls}-drawer`]"></div>
	</div>
</template>

<script>
const prefixCls = 'bee__drawer';
export default {
	name: 'BeeDrawer',
	data() {
		return {
			prefixCls,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
