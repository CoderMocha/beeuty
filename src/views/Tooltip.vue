<template>
	<div>
		<h2>Tooltip</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-tooltip content="提示文字">
						<bee-button>提示</bee-button>
					</bee-tooltip>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Tooltip',
};
</script>
