<template>
	<div :class="classes">
		<!--header-->
		<div :class="headerClasses" @click="toggle">
			<slot name="title">
				<div class="title">{{ title }}</div>
			</slot>
		</div>
		<collapse-transition v-if="mounted">
			<!--content-->
			<div :class="contentClasses" v-show="isActive">
				<slot></slot>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import CollapseTransition from '../base/collapse-transition';
const prefixCls = 'bee__collapse-pane';

export default {
	name: 'BeeCollapsePane',
	components: { CollapseTransition },
	props: {
		name: String,
		title: String,
	},
	data() {
		return {
			index: 0,
			isActive: false,
			mounted: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
		headerClasses() {
			return [`${prefixCls}-header`];
		},
		contentClasses() {
			return [`${prefixCls}-content`];
		},
	},
	methods: {
		toggle() {
			this.$parent.toggle({
				name: this.name || this.index,
				isActive: this.isActive,
			});
		},
	},
	mounted() {
		this.mounted = true;
	},
};
</script>
