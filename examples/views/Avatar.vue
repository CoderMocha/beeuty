<template>
	<div>
		<h2>Avatar</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-space vertical>
					<bee-card title="Size">
						<bee-space align="center">
							<bee-avatar size="large"></bee-avatar>
							<bee-avatar></bee-avatar>
							<bee-avatar size="small"></bee-avatar>
							<bee-avatar size="tiny"></bee-avatar>
							<bee-avatar :size="64" alt="64px" all-alt></bee-avatar>
						</bee-space>
					</bee-card>
					<bee-card title="Alt">
						<bee-space align="center">
							<bee-avatar alt="Bee" />
							<bee-avatar alt="Bee" all-alt />
						</bee-space>
					</bee-card>
				</bee-space>
			</bee-col>
			<bee-col :span="12">
				<bee-card title="Shape">
					<bee-space align="center">
						<bee-avatar alt="圆"></bee-avatar>
						<bee-avatar alt="方" shape="square"></bee-avatar>
					</bee-space>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Avatar',
};
</script>
