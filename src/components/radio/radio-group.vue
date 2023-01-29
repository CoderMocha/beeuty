<template>
	<div class="bee__radio-group"></div>
</template>

<script>
export default {
	name: 'BeeRadioGroup',
	props: {
		checked: Boolean,
		disabled: Boolean,
		label: String,
		name: String,
		value: String,
	},
};
</script>
