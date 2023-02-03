<template>
	<ul :class="classes">
		<slot></slot>
	</ul>
</template>

<script>
const prefixCls = 'bee__timeline';

export default {
	name: 'BeeTimeline',
	props: {
		mode: {
			validate(value) {
				return ['vertical', 'horizontal'].includes(value);
			},
			default: 'vertical',
		},
	},
	data() {
		return {};
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-mode-${this.mode}`]: !!this.mode,
				},
			];
		},
	},
};
</script>
