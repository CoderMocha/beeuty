<template>
	<div :class="classes">
		<div class="bee__card-cover">
			<slot name="cover"></slot>
		</div>
		<div class="bee__card-header">
			<h3 class="title">
				<slot name="title">{{ title }}</slot>
			</h3>
			<div class="extra">
				<slot name="extra"></slot>
			</div>
		</div>
		<div class="bee__card-content">
			<slot></slot>
		</div>
		<div class="bee__card-footer">
			<slot name="footer"></slot>
		</div>
		<div class="bee__card-action">
			<slot name="action"></slot>
		</div>
	</div>
</template>

<script>
import { basicProps } from '../../mixins/props.mixin';

const prefixCls = 'bee__card';

export default {
	name: 'BeeCard',
	mixins: [basicProps],
	props: {
		title: {
			type: String,
			default: '',
		},
		closeable: Boolean,
		hoverable: Boolean,
		bordered: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		classes() {
			return [
				prefixCls,
				{
					[`${prefixCls}-bordered`]: this.bordered,
					[`${prefixCls}-hoverable`]: this.hoverable,
				},
			];
		},
	},
};
</script>
