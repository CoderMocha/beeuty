<template>
	<div id="app">
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
		<main>
			<component :is="currentComp" />
		</main>
	</div>
</template>

<script>
import Avatar from './views/Avatar.vue';
import Badge from './views/Badge.vue';
import Button from './views/Button.vue';
import Tag from './views/Tag.vue';
import Card from './views/Card.vue';
import Form from './views/Form.vue';
import Tooltip from './views/Tooltip.vue';
import Tabs from './views/Tabs.vue';

export default {
	name: 'app',
	components: {
		Avatar,
		Badge,
		Button,
		Tag,
		Card,
		Form,
		Tooltip,
		Tabs,
	},
	data() {
		return {
			navigation: {
				currentIndex: 0,
				list: [
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
#app {
	//display: flex;
	nav {
		position: fixed;
		width: 200px;
		height: 100vh;
		overflow: auto;
		border-right: 1px #333 solid;
		background-color: white;
		box-sizing: border-box;
	}
	main {
		padding: 20px 20px 20px 220px;
	}
}
</style>
