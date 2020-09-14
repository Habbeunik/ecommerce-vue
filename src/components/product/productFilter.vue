<template>
	<div class="filter">
		<div class="breadCrumb">
			<span class="breadCrumb__item">Home</span>
			<ChevronRightIcon size="14" />
			<span class="breadCrumb__item">New</span>
		</div>
		<div v-for="filter in filters" :key="filter.label" class="filter__item">
			<span>{{ filter.label }}</span>
			<ChevronDownIcon size="15" />
		</div>
	</div>
</template>

<script>
import { ChevronRightIcon, ChevronDownIcon } from 'vue-feather-icons';

export default {
	components: {
		ChevronRightIcon,
		ChevronDownIcon
	},
	data() {
		return {
			filters: [
				{
					label: 'color'
				},
				{
					label: 'size'
				},
				{
					label: 'print'
				},
				{
					label: 'type'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.filter {
	width: 100%;

	&__item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: visuelt;
		font-weight: 600;
		text-transform: capitalize;
		padding: 20px 0px;
		border-top: 1px solid #f2f2f2;
		font-size: 14px;
	}
}

.breadCrumb {
	display: flex;
	margin-bottom: 20px;

	&__item {
		font-family: visuelt;
		font-size: 12px;
		color: #000000;
		font-weight: 600;
	}
}
</style>
