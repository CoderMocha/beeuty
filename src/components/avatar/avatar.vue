<template>
	<div :class="classes" :style="styles">
		<img v-if="!!src" :src="src" alt="alt" />
		<bee-icon v-else-if="!!icon" :icon="icon"></bee-icon>
		<span>{{ finalAlt }}</span>
	</div>
</template>

<script>
import { isNumber, isString } from 'lodash';

const prefixCls = 'bee__avatar';

export default {
	name: 'BeeAvatar',
	props: {
		shape: {
			validate(value) {
				return ['circle', 'square'].indexOf(value);
			},
			default: 'circle',
		},
		size: {
			validate(value) {
				if (isString(value)) {
					return ['tiny', 'small', 'medium', 'large'].indexOf(value);
				} else if (isNumber(value)) {
					return true;
				}
			},
			default: 'medium',
		},
		src: String,
		icon: String,
		alt: {
			type: String,
			default: '',
		},
		allAlt: Boolean,
		bgColor: {
			type: String,
			default: '#FFCC1C',
		},
		altColor: {
			type: String,
			default: '#002B00',
		},
	},
	computed: {
		classes() {
			return [
				prefixCls,
				`${prefixCls}-shape-${this.shape}`,
				{
					[`${prefixCls}-size-${this.size}`]: !!this.size && isString(this.size),
				},
			];
		},
		styles() {
			let sizeStyle = {};
			if (isNumber(this.size)) {
				sizeStyle = {
					width: `${this.size}px`,
					height: `${this.size}px`,
				};
			}
			const textStyles = {
				backgroundColor: this.bgColor,
				color: this.altColor,
			};
			return {
				...textStyles,
				...sizeStyle,
			};
		},
		finalAlt() {
			return this.allAlt ? this.alt : this.alt.substring(0, 1);
		},
	},
};
</script>
