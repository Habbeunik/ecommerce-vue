module.exports = {
	env: {
		browser: true
		// es2021: true,
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
		'plugin:vue/vue3-recommended',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {}
};
