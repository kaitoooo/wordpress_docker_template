const config = require('./config');
// webpack.configの構成を分割する
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const Sass = require('sass');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: config.dist,
        filename: 'assets/scripts/[name].bundle.js?[chunkhash]',
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    {
                        loader: 'style-loader',
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
    devServer: {
        contentBase: config.dist,
        hot: true,
        port: 3000,
        inline: true,
        overlay: true,
        historyApiFallback: true,
        watchContentBase: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    optimization: {
        moduleIds: 'named',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
