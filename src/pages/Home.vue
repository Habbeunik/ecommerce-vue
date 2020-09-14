<template>
	<div>
		<div class="banner">
			<button class="actionButton--secondary">prev</button>
			<button class="actionButton">next</button>
			<div class="imageWrapperLeft" />
			<div class="imageWrapperRight" />
			<Header />
			<div class="content">
				<div class="content__floater">
					<span>Utility-style Baseball hat</span>
				</div>
				<div class="content__text">
					<span>Utitity Baseball</span>
				</div>
				<button class="button">View details</button>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
	components: {
		Header
	}
};
</script>

<style lang="scss" scoped>
.banner {
	min-height: 100vh;
	position: relative;

	@media screen and (min-width: 800px) {
		min-height: 100vh;
		height: 100vh;
	}
}

.actionButton {
	display: none;

	@media screen and (min-width: 800px) {
		display: block;
		text-transform: uppercase;
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 50px 40px;
		font-weight: 600;
	}
	&--secondary {
		@extend .actionButton;
		left: 0;
		background-color: #ffffff;
		color: #000000;
	}
}

.imageWrapperLeft {
	position: absolute;
	left: 0;
	top: 0;
	width: 50%;
	height: 100%;
	background-color: #cccccc;
	z-index: -1;
	display: none;

	@media screen and (min-width: 800px) {
		display: block;
	}
}

.imageWrapperRight {
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: #dedddd;

	@media screen and (min-width: 800px) {
		width: 50%;
	}
}

.button {
	background-color: #f67c00;
	padding: 20px 70px;

	@media screen and (min-width: 800px) {
		padding: 18px 65px;
	}
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: inherit;
	height: calc(100% - 80px);
	padding: 40px 20px;
	position: relative;
	overflow: hidden;

	&__floater {
		position: absolute;
		right: -30px;
		bottom: 20%;
		width: 250px;
		height: 250px;
		border-radius: 50%;
		border: 1px solid #ffffff8c;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		span {
			max-width: 100px;
			color: #ffffff;
			font-family: visuelt;
			font-size: 13px;
			font-weight: 600;
			line-height: 20px;
		}

		@media screen and (min-width: 800px) {
			right: 5%;
		}
	}

	&__text {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: visuelt;
		font-weight: 800;
		color: #ffffff;
		text-align: center;
		font-size: 60px;

		@media screen and (min-width: 800px) {
			flex: initial;
			max-width: 200px;
			font-size: 70px;
			margin-bottom: 30px;
		}
	}
}
</style>
