<template>
	<span :class="classes">{{ finalValue }}</span>
</template>

<script>
import { padStart } from 'lodash';

const prefixCls = 'bee__count';

export default {
	name: 'BeeCount',
	props: {
		endVal: {
			type: Number,
			default: 0,
		},
		startVal: {
			type: Number,
			default: 0,
		},
		duration: {
			type: Number,
			default: 1000,
		},
	},
	data() {
		return {
			value: this.startVal,
			timer: null,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
		finalValue() {
			return padStart(this.value, this.endVal.toString().length, '0');
		},
	},
	methods: {
		start() {
			this.timer = setInterval(() => {
				this.value += 1;
				if (this.value >= this.endVal) {
					clearInterval(this.timer);
					this.timer = null;
				}
			}, this.duration / this.endVal);
		},
	},
	mounted() {
		this.start();
	},
};
</script>
