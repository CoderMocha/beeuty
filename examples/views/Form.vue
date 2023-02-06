<template>
	<div>
		<h2>Form</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-form>
						<bee-form-item label="测试">
							<bee-input v-model="formData.name" />
						</bee-form-item>
					</bee-form>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			formData: {
				name: '',
				age: 0,
			},
		};
	},
};
</script>
