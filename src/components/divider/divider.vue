<template>
	<div :class="classes">
		<div v-if="!!title" :class="[`${prefixCls}-title`]">{{ title }}</div>
	</div>
</template>

<script>
const prefixCls = 'bee__divider';
export default {
	name: 'BeeDivider',
	props: {
		vertical: Boolean,
		dashed: Boolean,
		title: String,
		titlePlacement: {
			validate(value) {
				return ['left', 'right', 'center'].includes(value);
			},
			default: 'center',
		},
	},
	data() {
		return {
			prefixCls,
		};
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-vertical`]: this.vertical,
					[`${prefixCls}-dashed`]: this.dashed,
					[`${prefixCls}-title-${this.titlePlacement}`]: !!this.titlePlacement,
				},
			];
		},
	},
};
</script>
