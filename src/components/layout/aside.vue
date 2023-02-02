<template>
	<aside :class="classes"><slot></slot></aside>
</template>

<script>
import { findComponentUpward } from '../../utils/assist';

const prefixCls = 'bee__aside';

export default {
	name: 'BeeAside',
	props: {
		width: Number,
	},
	data() {
		return {};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
		styles() {
			return {
				width: `${this.width}px`,
				flex: `0 0 ${this.width}px`,
			};
		},
	},
	mounted() {
		const parent = findComponentUpward(this, 'BeeLayout');
		if (parent) {
			parent.hasAside = true;
		}
	},
};
</script>
