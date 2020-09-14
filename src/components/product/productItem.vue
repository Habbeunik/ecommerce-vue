<template>
	<div class="product">
		<div class="product__image"></div>
		<div class="product__content">
			<span class="product__title">High-Waisted Mom short</span>
			<div class="product__sub">
				<span class="product__price">$49.00</span>
				<span class="product__action">Add to Bag</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product {
	width: 45%;
	min-width: 250px;
	margin-bottom: 20px;
	max-width: 450px;

	&:nth-child(2n) {
		margin-top: 50px;
	}

	&__image {
		height: 600px;
		background-color: #f2f2f2;
	}

	&__content {
		margin-top: 20px;
	}

	&__title {
		font-family: visuelt;
		font-weight: 800;
		font-size: 14px;
	}

	&__sub {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}

	&__price {
		font-family: visuelt;
		font-weight: 400;
		font-size: 12px;
	}

	&__action {
		font-family: visuelt;
		font-weight: 600;
		border-bottom: 2px solid #000000;
		font-size: 12px;
		cursor: pointer;
	}
}
</style>
