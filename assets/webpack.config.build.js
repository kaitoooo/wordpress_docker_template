const config = require('./config');
// webpack.configの構成を分割する
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
// CSSをJavaScriptと別ファイルにビルドする
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Sass = require('sass');

module.exports = merge(webpackConfig, {
	mode: 'production',
	devtool: false,
	output: {
		path: config.assets,
		filename: 'scripts/[name].bundle.js',
		assetModuleFilename: '[path][name][ext]',
	},
	module: {
		rules: [
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: Sass,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
			ignoreOrder: false,
		}),
	],
});
