<template>
	<div :class="classes">
		<!--header-->
		<div @click="isActive = !isActive">
			<slot name="title">{{ title }}</slot>
		</div>
		<collapse-transition>
			<!--content-->
			<div v-show="isActive">
				<slot></slot>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import CollapseTransition from '../base/collapse-transition';
const prefixCls = 'bee__collapse-item';

export default {
	name: 'BeeCollapseItem',
	components: { CollapseTransition },
	props: {
		name: String,
		title: String,
	},
	data() {
		return {
			isActive: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
