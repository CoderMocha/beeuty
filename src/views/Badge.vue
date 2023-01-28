<template>
	<div>
		<h2>Badge</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="type">
					<bee-space align="center" gap="32">
						<bee-badge :value="49">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
						<bee-badge value="new" type="info">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
						<bee-badge value="!" type="warning">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
					</bee-space>
				</bee-card>
				<bee-card title="Value">
					<bee-space align="center" gap="32">
						<bee-badge :value="169">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
						<bee-badge value="new">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
						<bee-badge value="hot">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
					</bee-space>
				</bee-card>
			</bee-col>
			<bee-col :span="12">
				<bee-card title="Dot">
					<bee-space align="center">
						<bee-badge is-dot>
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
					</bee-space>
				</bee-card>
				<bee-card title="Max">
					<bee-space align="center">
						<bee-badge :value="101" :max="99">
							<bee-button type="info" plain>评论</bee-button>
						</bee-badge>
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

<style lang="scss" scoped></style>
