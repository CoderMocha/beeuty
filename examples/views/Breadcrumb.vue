<template>
	<div>
		<bee-h2>Breadcrumb</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-breadcrumb>
						<bee-breadcrumb-item>首页</bee-breadcrumb-item>
						<bee-breadcrumb-item>列表</bee-breadcrumb-item>
						<bee-breadcrumb-item>内容</bee-breadcrumb-item>
					</bee-breadcrumb>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Breadcrumb',
};
</script>

<style lang="scss" scoped></style>
