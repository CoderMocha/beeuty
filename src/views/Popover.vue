<template>
	<div>
		<h2>Popover</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-popover content="提示文字">
						<bee-button>提示</bee-button>
					</bee-popover>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Popover',
};
</script>

<style lang="scss" scoped></style>
