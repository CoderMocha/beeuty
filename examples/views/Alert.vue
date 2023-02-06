<template>
	<div>
		<h2>Alert</h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-space vertical>
					<bee-card title="Basic">
						<bee-space vertical>
							<bee-alert title="Default">Default 类型</bee-alert>
							<bee-alert title="Success" type="success">Success 类型</bee-alert>
							<bee-alert title="Info" type="info">Info 类型</bee-alert>
							<bee-alert title="Warning" type="warning">Warning 类型</bee-alert>
							<bee-alert title="Error" type="error">Error 类型</bee-alert>
						</bee-space>
					</bee-card>
				</bee-space>
			</bee-col>
			<bee-col :span="12">
				<bee-space vertical>
					<bee-card title="No Border">
						<bee-space vertical>
							<bee-alert title="Info" type="info" :bordered="false">Info 类型</bee-alert>
						</bee-space>
					</bee-card>
					<bee-card title="Closeable">
						<bee-space vertical>
							<bee-alert title="可关闭" closeable type="info"></bee-alert>
							<bee-alert title="可关闭" closeable type="warning">关闭以后有回调</bee-alert>
							<bee-alert title="可关闭" closeable type="warning">关闭以后有回调</bee-alert>
							<bee-alert title="可关闭" closeable type="warning">关闭以后有回调</bee-alert>
						</bee-space>
					</bee-card>
				</bee-space>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Alert',
};
</script>
