<template>
	<div>
		<bee-h2>Tree</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-space vertical>
					<bee-card title="Basic">
						<bee-tree :data="treeData"></bee-tree>
					</bee-card>
				</bee-space>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Tree',
	data() {
		return {
			treeData: [
				{
					id: '1',
					title: '一气',
					children: [
						{
							id: '1-1',
							title: '两仪',
							children: [
								{
									id: '1-1-1',
									title: '三清',
									children: [
										{
											id: '1-1-1-1',
											title: '四象',
										},
									],
								},
							],
						},
						{
							id: '1-2',
							title: '两仪',
						},
					],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
