<template>
	<div class="bee__input">
		<textarea
			v-if="type === 'textarea'"
			ref="input"
			:value="value"
			:placeholder="placeholder"
			@input="onInput"
			@blur="onBlur"
		/>
		<input
			v-else
			ref="input"
			:type="type"
			:value="value"
			:placeholder="placeholder"
			@input="onInput"
			@blur="onBlur"
		/>
		<slot name="suffix">
			<div class="suffix">{{ suffix }}</div>
		</slot>
	</div>
</template>

<script>
import { formMixin } from '../../mixins/form.mixin';

export default {
	name: 'BeeInput',
	mixins: [formMixin],
	props: {
		placeholder: {
			type: String,
			default: '请输入……',
		},
		type: {
			type: String,
			default: 'text',
		},
		size: {
			validate(value) {
				return ['tiny', 'small', 'medium', 'large'].includes(value);
			},
			default: 'medium',
		},
		suffix: String,
		value: {
			type: [String, Number],
			default: '',
		},
	},
	data() {
		return {
			currentValue: this.value,
		};
	},
	methods: {
		onInput(e) {
			const value = e.target.value;
			this.currentValue = value;
			this.$emit('input', value);
			this.dispatch('BeeFormItem', 'form-change', value);
		},
		onBlur() {
			this.dispatch('BeeFormItem', 'form-blur', this.value);
		},
	},
	mounted() {
		if (this.$parent.labelFor) this.$refs.input.id = this.$parent.labelFor;
	},
};
</script>
