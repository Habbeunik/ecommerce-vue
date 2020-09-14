<template>
	<div>
		<Header></Header>
		<div class="container">
			<div class="filterSection">
				<ProductFilter />
			</div>
			<div class="contentSection">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</div>
		<div class="viewMore">
			<button>View more</button>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductFilter from '../components/product/productFilter.vue';
import ProductItem from '../components/product/productItem.vue';

export default {
	components: {
		Header,
		ProductFilter,
		ProductItem
	}
};
</script>

<style lang="scss" scoped>
.container {
	margin-top: 50px;
	display: flex;
}

.filterSection {
	width: 15%;
	position: sticky;
	top: 0;
}

.contentSection {
	width: 100%;
	margin-left: 5%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.viewMore {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 100px 0px;
}
</style>
