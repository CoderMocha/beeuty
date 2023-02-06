<template>
	<div>
		<bee-h2>Count</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-space vertical>
					<bee-card title="basic">
						<bee-count :end-val="999"></bee-count>
					</bee-card>
				</bee-space>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Count',
};
</script>

<style lang="scss" scoped></style>
