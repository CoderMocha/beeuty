<template>
	<div :class="classes">
		<slot name="title">
			<div class="title">{{ title }}</div>
		</slot>
		<slot></slot>
	</div>
</template>

<script>
const prefixCls = 'bee__menu-group';

export default {
	name: 'BeeMenuGroup',
	props: {
		title: String,
	},
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
