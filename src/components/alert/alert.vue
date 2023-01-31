<template>
	<transition name="alert">
		<div v-if="!closed" :class="classes">
			<div v-if="bordered" class="bee__alert-border"></div>
			<button v-if="closeable" class="bee__alert-close" @click="close"></button>
			<div :class="[`${prefixCls}-icon`]"></div>
			<div :class="[`${prefixCls}-body`]">
				<div :class="[`${prefixCls}-title`]">{{ title }}</div>
				<div :class="[`${prefixCls}-content`]"><slot></slot></div>
			</div>
		</div>
	</transition>
</template>

<script>
const prefixCls = 'bee__alert';
export default {
	name: 'BeeAlert',
	props: {
		type: {
			validate(value) {
				return ['default', 'success', 'info', 'warning', 'error'].includes(value);
			},
			default: 'default',
		},
		title: String,
		closeable: Boolean,
		bordered: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			prefixCls,
			closed: false,
		};
	},
	computed: {
		classes() {
			return [
				prefixCls,
				`${prefixCls}-type-${this.type}`,
				{ [`${prefixCls}-bordered`]: this.bordered },
			];
		},
	},
	methods: {
		close() {
			this.closed = true;
			this.$emit('close');
		},
	},
};
</script>
