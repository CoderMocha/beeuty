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
import { popMixin } from '../../mixins/popup.mixin';

const prefixCls = 'bee__tooltip';

export default {
	name: 'BeeTooltip',
	mixins: [popMixin],
	props: {
		content: String,
	},
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
