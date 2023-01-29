<template>
	<div class="bee__alert">
		<div v-if="bordered" class="bee__alert-border"></div>
		<button v-if="closeable" class="bee__alert-close"></button>
		<div class="bee__alert-icon"></div>
		<div class="bee__alert-body">
			<div class="bee__alert-title">{{ title }}</div>
			<div class="bee__alert-content"><slot></slot></div>
		</div>
	</div>
</template>

<script>
const prefixCls = 'bee__alert';
export default {
	name: 'alert',
	props: {
		type: {
			validate(value) {
				return ['default', 'success', 'info', 'warning', 'error'].includes(value);
			},
		},
		title: String,
		closeable: Boolean,
		bordered: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		classes() {
			return [prefixCls, `${prefixCls}-type-${this.type}`];
		},
	},
};
</script>
