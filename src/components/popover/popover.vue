<template>
	<div :class="classes" @mouseenter="handleShowPopper" @mouseleave="handleHidePopper">
		<div :class="[`${prefixCls}-rel`]" ref="reference">
			<slot></slot>
		</div>
		<transition name="pop">
			<div v-if="visible" class="popover">
				<slot name="popover">
					<div class="popover-title">
						<slot name="popover-title">{{ title }}</slot>
					</div>
					<div class="popover-content">
						<slot name="popover-content">{{ content }}</slot>
					</div>
				</slot>
			</div>
		</transition>
	</div>
</template>

<script>
import { popMixin } from '../../mixins/popup.mixin';

const prefixCls = 'bee__popover';
export default {
	name: 'BeePopover',
	mixins: [popMixin],
	props: {
		title: String,
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
