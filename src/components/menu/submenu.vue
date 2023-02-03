<template>
	<div :class="classes">
		<div class="header" @click="visible = !visible">
			<slot name="title">
				<!--			<div class="title">{{ title }}</div>-->
			</slot>
		</div>
		<collapse-transition>
			<div v-show="visible">
				<slot></slot>
			</div>
		</collapse-transition>
	</div>
</template>

<script>
import CollapseTransition from '../base/collapse-transition';

const prefixCls = 'bee__submenu';

export default {
	name: 'BeeSubmenu',
	components: { CollapseTransition },
	props: {},
	data() {
		return {
			visible: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
