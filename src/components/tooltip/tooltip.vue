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
const prefixCls = 'bee__tooltip';
export default {
	name: 'BeeTooltip',
	props: {
		content: String,
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
