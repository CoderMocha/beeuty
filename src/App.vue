<template>
	<div id="app">
		<bee-layout class="doc-container">
			<bee-header class="doc-header">
				<div class="logo">
					<img src="./assets/logo.svg" alt="" />
					<div class="logo-text">
						<span class="bee">Bee</span>
						<span class="ui">UI</span>
					</div>
				</div>
			</bee-header>
			<bee-content>
				<bee-layout>
					<bee-aside :width="200">
						<bee-menu>
							<bee-menu-item>菜单</bee-menu-item>
							<bee-menu-group title="分组">
								<bee-menu-item>菜单</bee-menu-item>
								<bee-menu-item>菜单</bee-menu-item>
							</bee-menu-group>
							<bee-submenu> </bee-submenu>
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

export default {
	name: 'app',
	components: {
		Breadcrumb,
		Collapse,
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
	},
	data() {
		return {
			navigation: {
				currentIndex: 0,
				list: [
					{
						symbol: 'Breadcrumb',
					},
					{
						symbol: 'Collapse',
					},
					{
						symbol: 'Tree',
					},
					{
						symbol: 'Popover',
					},
					{
						symbol: 'Alert',
					},
					{
						symbol: 'Avatar',
					},
					{
						symbol: 'Badge',
					},
					{
						symbol: 'Button',
					},
					{
						symbol: 'Card',
					},
					{
						symbol: 'Form',
					},
					{
						symbol: 'Tag',
					},
					{
						symbol: 'Tooltip',
					},
					{
						symbol: 'Tabs',
					},
					{
						symbol: 'Divider',
					},
					{
						symbol: 'Typography',
					},
				],
			},
		};
	},
	computed: {
		currentComp() {
			return this.navigation.list[this.navigation.currentIndex].symbol;
		},
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
	nav {
		width: 280px;
		height: 100%;
		overflow: auto;
		border-right: 1px #333 solid;
		background-color: white;
	}
	.main {
		padding: 20px;
	}
}
</style>
