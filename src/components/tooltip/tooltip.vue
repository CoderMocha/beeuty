<template>
	<div :class="classes" @mouseenter="handleShowPopper" @mouseleave="handleHidePopper">
		<div :class="[`${prefixCls}-rel`]" ref="reference">
			<slot></slot>
		</div>
		<transition name="pop">
			<div v-show="visible" :class="[`${prefixCls}-content`]">
				<slot name="content">{{ content }}</slot>
			</div>
		</transition>
	</div>
</template>

<script>
import { flattenDeep } from 'lodash';

const prefixCls = 'bee__tooltip';
const positions = ['top', 'left', 'right', 'bottom'];
const validateArray = flattenDeep(
	positions.map((pos) => {
		return [pos, `${pos}-start`, 'pos-end'];
	}),
);

export default {
	name: 'BeeTooltip',
	props: {
		content: String,
		placement: {
			validate(value) {
				return validateArray.includes(value);
			},
			default: 'top',
		},
	},
	data() {
		return {
			prefixCls,
			visible: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
	methods: {
		handleShowPopper() {
			this.visible = true;
		},
		handleHidePopper() {
			this.visible = false;
		},
	},
};
</script>
