<template>
	<div class="header">
		<div class="container header__wrapper">
			<div class="nav">
				<div class="nav__item" v-for="nav in navs" :key="nav.path">
					<span>{{ nav.label }}</span>
				</div>
			</div>
			<MenuIcon size="22" class="icon"></MenuIcon>
			<span class="title">urban outfitters</span>
			<div class="nav">
				<div v-for="{ label, path } in actions" :key="path" class="nav__item">
					<div v-if="label === 'Search'">
						<SearchIcon size="15"></SearchIcon>
					</div>
					<div v-if="label === 'Bag (0)'">
						<ShoppingBagIcon size="15"></ShoppingBagIcon>
					</div>
					<span>{{ label }}</span>
					<div v-if="label === 'England'">
						<ChevronDownIcon size="15"></ChevronDownIcon>
					</div>
				</div>
			</div>
			<ShoppingBagIcon size="22" class="icon"></ShoppingBagIcon>
		</div>
	</div>
</template>

<script>
import {
	MenuIcon,
	ShoppingBagIcon,
	SearchIcon,
	ChevronDownIcon
} from 'vue-feather-icons';

export default {
	name: 'Header',
	components: {
		MenuIcon,
		ShoppingBagIcon,
		ChevronDownIcon,
		SearchIcon
	},
	data() {
		return {
			navs: [
				{
					label: 'New',
					path: '/'
				},
				{
					label: 'Shop',
					path: '/'
				},
				{
					label: 'Woman',
					path: '/'
				},
				{
					label: 'Man',
					path: '/'
				}
			],
			actions: [
				{
					LeftIcon: SearchIcon,
					label: 'Search',
					path: '/'
				},
				{
					label: 'England',
					path: '/',
					RightIcon: SearchIcon
				},
				{
					label: 'Sign in',
					path: '/'
				},
				{
					LeftIcon: SearchIcon,
					label: 'Bag (0)',
					path: '/'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding: 20px 0px;
	position: absolute;
	top: 0;
	width: 100%;
	left: 0;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (min-width: 800px) {
		position: static;
		background-color: #ffffff;
		padding: 30px 0px;
	}
}

.nav {
	display: none;

	@media screen and (min-width: 800px) {
		display: flex;
	}

	&__item {
		font-family: visuelt;
		font-weight: 600;
		font-size: 14px;
		margin-left: 30px;
		display: flex;
		align-items: center;

		span {
			margin: 0px 5px;
		}

		&::first-child {
			margin-left: 0px;
		}
	}
}

.title {
	text-transform: uppercase;
	color: #ffffff;
	font-family: circular;

	@media screen and (min-width: 800px) {
		color: #000000;
	}
}

.icon {
	color: #ffffff;

	@media screen and (min-width: 800px) {
		display: none;
	}
}
</style>
