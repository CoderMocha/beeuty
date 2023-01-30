<template>
	<div>
		<h2>Typography</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Text">
					<bee-text>普通</bee-text>
					<bee-text type="success">成功</bee-text>
					<bee-text type="info">信息</bee-text>
					<bee-text type="warning">警告</bee-text>
					<bee-text type="error">失败</bee-text>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Typography',
};
</script>

<style lang="scss" scoped></style>
