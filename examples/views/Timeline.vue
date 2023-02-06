<template>
	<div>
		<bee-h2>Timeline</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-timeline>
						<bee-timeline-item>1992</bee-timeline-item>
						<bee-timeline-item>1993</bee-timeline-item>
					</bee-timeline>
				</bee-card>
			</bee-col>
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-timeline mode="horizontal">
						<bee-timeline-item>1992</bee-timeline-item>
						<bee-timeline-item>1993</bee-timeline-item>
					</bee-timeline>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Timeline',
};
</script>

<style lang="scss" scoped></style>
