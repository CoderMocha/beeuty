<template>
	<div>
		<h2>Divider</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-divider></bee-divider>
				</bee-card>
				<bee-card title="Basic">
					<bee-divider title="左" title-placement="left"></bee-divider>
					<bee-divider title="右" title-placement="right"></bee-divider>
					<bee-divider title="中"></bee-divider>
				</bee-card>
			</bee-col>
			<bee-col :span="12">
				<bee-card title="Dashed">
					<bee-divider dashed></bee-divider>
				</bee-card>
				<bee-card title="Vertical">
					<bee-space>
						<span>垂直</span>
						<bee-divider vertical></bee-divider>
						<span>拆分</span>
					</bee-space>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Tag',
};
</script>

<style lang="scss" scoped></style>
