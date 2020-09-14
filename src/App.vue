<template>
	<HomePage></HomePage>
</template>

<script>
import HomePage from './pages/Home.vue';

export default {
	name: 'App',
	components: {
		HomePage
	}
};
</script>

<style>
@import './assets/styles/main.scss';

* {
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
