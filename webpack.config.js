var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: './main.js',
	output:{
		path: path.resolve('build/js/'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			}
		]
	},
	postcss: function() {
		return [precss, autoprefixer];
	},
	resolve: {
		extensions: ['','.js']
	}
}