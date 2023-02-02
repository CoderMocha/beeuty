<template>
	<div :class="classes">
		<slot name="title"></slot>
	</div>
</template>

<script>
const prefixCls = 'bee__submenu';

export default {
	name: 'BeeSubmenu',
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
