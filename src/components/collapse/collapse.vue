<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
const prefixCls = 'bee__collapse';
export default {
	name: 'BeeCollapse',
	props: {
		accordion: Boolean,
		value: {
			type: [Array, String],
		},
	},
	data() {
		return {
			currentValue: this.value,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
	watch: {
		value(val) {
			this.currentValue = val;
		},
		currentValue() {
			this.setActive();
		},
	},
	methods: {
		setActive() {
			const activeKey = this.getActiveKey();

			this.$nextTick(() => {
				this.$children.forEach((child, index) => {
					const name = child.name || index.toString();

					child.isActive = activeKey.indexOf(name) > -1;
					child.index = index;
				});
			});
		},
		getActiveKey() {
			let activeKey = this.currentValue || [];
			const accordion = this.accordion;

			if (!Array.isArray(activeKey)) {
				activeKey = [activeKey];
			}

			if (accordion && activeKey.length > 1) {
				activeKey = [activeKey[0]];
			}

			for (let i = 0; i < activeKey.length; i++) {
				activeKey[i] = activeKey[i].toString();
			}

			return activeKey;
		},
		toggle(data) {
			const name = data.name.toString();
			let newActiveKey = [];

			if (this.accordion) {
				if (!data.isActive) {
					newActiveKey.push(name);
				}
			} else {
				let activeKey = this.getActiveKey();
				console.log(name);
				console.log(activeKey);
				const nameIndex = activeKey.indexOf(name);

				if (data.isActive) {
					if (nameIndex > -1) {
						activeKey.splice(nameIndex, 1);
					}
				} else {
					if (nameIndex < 0) {
						activeKey.push(name);
					}
				}
				newActiveKey = activeKey;
			}
			this.currentValue = newActiveKey;
			this.$emit('input', newActiveKey);
			this.$emit('change', newActiveKey);
		},
	},
	mounted() {
		this.setActive();
	},
};
</script>
