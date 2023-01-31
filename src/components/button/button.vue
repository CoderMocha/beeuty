<template>
	<div class="bee__button" :class="classes" @click="handleClick">
		<div class="loading-wrap">
			<i class="icon-loading beeicon bee-loading"></i>
		</div>
		<slot name="prefix">
			<div class="prefix"></div>
		</slot>
		<div class="label">
			<slot></slot>
		</div>
		<slot name="suffix">
			<div class="suffix"></div>
		</slot>
	</div>
</template>

<script>
import { isEmpty, isEqual } from 'lodash';
import { basicProps } from '../../mixins/props.mixin';

export default {
	name: 'BeeButton',
	mixins: [basicProps],
	props: {
		// 幽灵
		ghost: Boolean,
		// 圆角
		round: Boolean,
		// 朴素
		plain: Boolean,
		// 虚线
		dashed: Boolean,
		// 禁用
		disabled: Boolean,
		// 加载中 TODO
		loading: Boolean,
	},
	computed: {
		classes() {
			let size = this.size;
			let type = this.type;
			let ghost = this.ghost;
			let round = this.round;
			let plain = this.plain;
			let dashed = this.dashed;
			if (
				!isEmpty(this.$parent.$options._componentTag) &&
				isEqual('bee-button-group', this.$parent.$options._componentTag)
			) {
				size = this.$parent.size || size;
				type = this.$parent.type || type;
				ghost = this.$parent.ghost || ghost;
				round = this.$parent.round || round;
				plain = this.$parent.plain || plain;
				dashed = this.$parent.dashed || dashed;
			}
			return [
				`bee__button-size-${size}`,
				`bee__button-type-${type}`,
				{
					ghost,
					round,
					plain,
					dashed,
					disabled: this.disabled,
					loading: this.loading,
				},
			];
		},
	},
	methods: {
		handleClick($event) {
			if (!this.disabled && !this.loading) {
				this.$emit('click', $event);
			}
		},
	},
};
</script>
