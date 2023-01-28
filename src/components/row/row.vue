<template>
	<div :class="classes" :style="styles">
		<slot></slot>
	</div>
</template>

<script>
import { findBrothersComponents, findComponentDownward } from '../../utils/assist';

const prefixCls = 'bee__row';

export default {
	name: 'BeeRow',
	props: {
		gutter: {
			type: Number,
			default: 0,
		},
		className: String,
	},
	computed: {
		classes() {
			return {
				[`${prefixCls}`]: true,
				[`${this.className}`]: !!this.className,
			};
		},
		styles() {
			let style = {};
			if (this.gutter !== 0) {
				style = {
					marginLeft: this.gutter / -2 + 'px',
					marginRight: this.gutter / -2 + 'px',
				};
			}
			return style;
		},
	},
	methods: {
		updateGutter(val) {
			const Col = findComponentDownward(this, 'BeeCol');
			const Cols = findBrothersComponents(Col, 'BeeCol', false);
			if (Cols.length) {
				Cols.forEach((child) => {
					if (val !== 0) {
						child.gutter = val;
					}
				});
			}
		},
	},
	watch: {
		gutter(val) {
			this.updateGutter(val);
		},
	},
};
</script>
