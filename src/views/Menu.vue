<template>
	<div>
		<bee-h2>Menu</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-menu>
						<bee-menu-item>蜜蜂</bee-menu-item>
						<bee-menu-item>蜂蜜</bee-menu-item>
					</bee-menu>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Menu',
};
</script>

<style lang="scss" scoped></style>
