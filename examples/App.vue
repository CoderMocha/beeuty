<template>
	<div id="app">
		<bee-layout class="doc-container">
			<bee-header class="doc-header">
				<div class="logo">
					<img src="../assets/logo.svg" alt="" />
					<div class="logo-text">
						<span class="bee">Bee</span>
						<span class="ui">uty</span>
					</div>
				</div>
			</bee-header>
			<bee-content>
				<bee-layout>
					<bee-aside class="aside" :width="200">
						<bee-menu>
							<template v-for="(item, index) in navigation.list">
								<bee-menu-group v-if="item.children" :title="item.title">
									<bee-menu-item
										v-for="(child, childIndex) in item.children"
										:key="childIndex"
                    :active="child.symbol === currentComp"
										@click="currentComp = child.symbol"
										>{{ child.symbol }} {{ child.title }}</bee-menu-item
									>
								</bee-menu-group>
								<bee-menu-item v-else :key="index" @click="currentComp = item.symbol">{{
									item.symbol
								}}</bee-menu-item>
							</template>
						</bee-menu>
						<nav>
							<div
								class="item"
								v-for="(item, index) in navigation.list"
								:key="index"
								@click="navigation.currentIndex = index"
							>
								{{ item.symbol }}
							</div>
						</nav>
					</bee-aside>
					<bee-content class="main">
						<component :is="currentComp" />
					</bee-content>
				</bee-layout>
			</bee-content>
			<bee-footer></bee-footer>
		</bee-layout>
	</div>
</template>

<script>
import Breadcrumb from './views/Breadcrumb.vue';
import Alert from './views/Alert.vue';
import Avatar from './views/Avatar.vue';
import Badge from './views/Badge.vue';
import Button from './views/Button.vue';
import Tag from './views/Tag.vue';
import Card from './views/Card.vue';
import Form from './views/Form.vue';
import Tooltip from './views/Tooltip.vue';
import Tabs from './views/Tabs.vue';
import Divider from './views/Divider.vue';
import Typography from './views/Typography.vue';
import Popover from './views/Popover.vue';
import Tree from './views/Tree.vue';
import Collapse from './views/Collapse.vue';
import Menu from './views/Menu.vue';
import Timeline from './views/Timeline.vue';
import Count from './views/Count.vue';
import Empty from './views/Empty.vue';

export default {
	name: 'app',
	components: {
		Breadcrumb,
		Collapse,
		Count,
		Alert,
		Avatar,
		Badge,
		Button,
		Tag,
		Card,
		Form,
		Tooltip,
		Tabs,
		Divider,
		Typography,
		Popover,
		Tree,
		Menu,
		Timeline,
    Empty,
	},
	data() {
		return {
			currentComp: 'Empty',
			navigation: {
				currentIndex: 0,
				list: [
					{
						title: 'Basic',
						children: [
							{
								title: '布局',
								symbol: 'Layout',
							},
							{
								title: '头像',
								symbol: 'Avatar',
							},
							{
								title: '按钮',
								symbol: 'Button',
							},
							{
								title: '卡片',
								symbol: 'Card',
							},
							{
								title: '折叠面板',
								symbol: 'Collapse',
							},
							{
								title: '数字',
								symbol: 'Count',
							},
							{
								title: '分割线',
								symbol: 'Divider',
							},
							{
								title: '排印',
								symbol: 'Typography',
							},
						],
					},
					{
						title: 'Form',
						children: [
							{
								title: '表单',
								symbol: 'Form',
							},
						],
					},
					{
						title: 'Data',
						children: [
							{
								title: '标签',
								symbol: 'Tag',
							},
							{
								title: '树',
								symbol: 'Tree',
							},
							{
								title: '时间轴',
								symbol: 'Timeline',
							},
						],
					},
					{
						title: 'Feedback',
						children: [
							{
								title: '警告',
								symbol: 'Alert',
							},
							{
								title: '警告',
								symbol: 'Badge',
							},
							{
								title: '弹出信息',
								symbol: 'Popover',
							},
							{
								title: '弹出提示',
								symbol: 'Tooltip',
							},
							{
								title: '空状态',
								symbol: 'Empty',
							},
						],
					},
					{
						title: 'Navigation',
						children: [
							{
								title: '面包屑',
								symbol: 'Breadcrumb',
							},
							{
								title: '标签页',
								symbol: 'Tabs',
							},
							{
								title: '菜单',
								symbol: 'Menu',
							},
						],
					},
				],
			},
		};
	},
};
</script>

<style lang="scss">
.doc-container {
	height: 100vh;
	.doc-header {
		height: 80px;
		display: flex;
		align-items: center;
		padding: 0 24px;
		.logo {
			display: flex;
			img {
				width: 40px;
				margin-right: 16px;
			}
			.logo-text {
				display: flex;
				font-size: 36px;
				.bee {
					font-weight: bold;
					color: #ffcc1c;
				}
				.ui {
					font-weight: normal;
					color: #002b00;
				}
			}
		}
	}
	.aside {
		width: 280px;
		height: 100%;
	}
	.main {
		padding: 20px;
	}
}
</style>
