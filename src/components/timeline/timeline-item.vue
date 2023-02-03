<template>
	<li :class="classes">
		<div :class="adornClasses">
			<div :class="tailClasses"></div>
			<div :class="dotClasses"><slot name="dot"></slot></div>
		</div>
		<div :class="contentClasses"><slot></slot></div>
	</li>
</template>

<script>
const prefixCls = 'bee__timeline-item';

export default {
	name: 'BeeTimelineItem',
	props: {},
	data() {
		return {};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
		adornClasses() {
			return [`${prefixCls}-adorn`];
		},
		tailClasses() {
			return [`${prefixCls}-adorn-tail`];
		},
		dotClasses() {
			return [`${prefixCls}-adorn-dot`];
		},
		contentClasses() {
			return [`${prefixCls}-content`];
		},
	},
};
</script>
