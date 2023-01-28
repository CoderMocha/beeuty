<template>
	<div :class="classes">
		<div class="bee__badge-value">{{ finalValue }}</div>
		<slot></slot>
	</div>
</template>

<script>
import { isNumber } from 'lodash';

const prefixCls = 'bee__badge';

export default {
	name: 'BeeBadge',
	props: {
		value: {
			type: [Number, String],
		},
		max: Number,
		type: {
			validate(value) {
				return ['default', 'info', 'warning'].includes(value);
			},
			default: 'default',
		},
		isDot: Boolean,
	},
	computed: {
		classes() {
			return [
				prefixCls,
				`${prefixCls}-type-${this.type}`,
				{
					[`${prefixCls}-dot`]: this.isDot,
				},
			];
		},
		finalValue() {
			if (!!this.max && isNumber(this.value)) {
				return this.value > this.max ? `${this.max}+` : this.value;
			} else {
				return this.value;
			}
		},
	},
};
</script>
