<template>
	<div class="bee__form-item">
		<label :for="labelFor">
			<span>{{ label }}</span>
			<span class="require-mark">*</span>
		</label>
		<div class="content">
			<div class="value-container"><slot></slot></div>
			<div class="message-container">{{ message }}</div>
		</div>
	</div>
</template>

<script>
import { formMixin } from '../../mixins/form.mixin';
import { isEmpty, isNull, isUndefined } from 'lodash';

export default {
	name: 'BeeFormItem',
	mixins: [formMixin],
	inject: ['form'],
	props: {
		label: String,
		prop: String,
	},
	data() {
		return {
			initialValue: '',
			message: '',
			labelFor: 'input' + new Date().valueOf(),
		};
	},
	computed: {
		fieldValue() {
			return this.form.model[this.prop];
		},
	},
	methods: {
		setRules() {
			this.$on('form-blur', this.onFieldBlur);
			this.$on('form-change', this.onFieldChange);
		},
		onFieldBlur() {
			this.validate('blur');
		},
		onFieldChange() {
			this.validate('change');
		},
		getRules() {
			return isEmpty(this.form.rules) ? [] : this.form.rules[this.prop];
		},
		resetField() {
			this.message = '';
			this.form.model[this.prop] = this.initialValue;
		},
		/**
		 * 校验表单数据
		 * @param trigger 触发校验类型
		 * @param callback 回调函数
		 */
		validate(trigger, callback) {
			const rules = this.getFilteredRule(trigger);
			if (!rules || isEmpty(rules)) return true;
			const value = this.fieldValue;
			let flag = true;
			let targetRule = {};
			this.message = '';
			for (const rule of rules) {
				switch (rule.rule) {
					case 'required': {
						flag = isEmpty(value) || isNull(value) || isUndefined(value);
						break;
					}
				}
				if (flag) {
					targetRule = rule;
					break;
				}
			}
			this.message = targetRule.msg;
			if (callback) callback(flag);
		},
	},
	mounted() {
		if (this.prop) {
			this.dispatch('BeeForm', 'form-add', this);
			this.initialValue = this.fieldValue;
			this.setRules();
		}
	},
	beforeDestroy() {
		this.dispatch('BeeForm', 'form-remove', this);
	},
};
</script>
