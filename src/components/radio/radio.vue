<template>
	<div class="bee__radio"></div>
</template>

<script>
export default {
	name: 'BeeRadio',
	props: {
		checked: Boolean,
		disabled: Boolean,
		label: String,
		name: String,
		value: String,
	},
};
</script>
