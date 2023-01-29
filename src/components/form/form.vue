<template>
	<div class="bee__form"><slot></slot></div>
</template>

<script>
export default {
	name: 'BeeForm',
	provide() {
		return {
			form: this,
		};
	},
	props: {
		labelPlacement: {
			validate(value) {
				return ['left', 'top'].includes(value);
			},
		},
		labelAlign: {
			validate(value) {
				return ['left', 'right'].includes(value);
			},
		},
		labelWidth: {
			type: [String, Number],
			default: 'auto',
		},
		model: Object,
		rules: Object,
	},
	data() {
		return {
			fields: [],
		};
	},
	methods: {
		resetFields() {},
		validate() {},
	},
	created() {
		this.$on('form-add', (field) => {
			if (field) this.fields.push(field);
		});
		this.$on('form-remove', (field) => {
			if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
		});
	},
};
</script>
