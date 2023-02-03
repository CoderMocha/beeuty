<template>
	<div :class="classes" @click="$emit('click')"><slot></slot></div>
</template>

<script>
const prefixCls = 'bee__menu-item';

export default {
	name: 'BeeMenuItem',
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
