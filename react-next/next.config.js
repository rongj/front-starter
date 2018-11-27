const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

if (typeof require !== 'undefined') {
	require.extensions['.css'] = (file) => {}
}

module.exports = withPlugins([
	[withCss],
	[withLess, {
		lessLoaderOptions: {
			"inlineJavaScript": true,
		}
	}],
	[withSass, {
		lessLoaderOptions: {
			"inlineJavaScript": true,
		}
	}],
])