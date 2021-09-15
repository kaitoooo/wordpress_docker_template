const webpack = require('webpack');
// ビルドが成功するたびにビルドディレクトリ内のファイルやディレクトリを削除する
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// CSSを最適化・縮小する
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// ファイルをコピーする
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 圧縮するプラグイン
const TerserPlugin = require('terser-webpack-plugin');
// JavaScriptコードの問題を見つけて修正する
const ESLintPlugin = require('eslint-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';

const webpackConfig = {
    target: 'web',
    entry: {
        app: './scripts/app.ts',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|webp|woff|woff2)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 4kb
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            isDev,
        }),
        new ESLintPlugin({
            extensions: ['.js', '.ts'],
            exclude: 'node_modules',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'img/',
                    to: 'img/',
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
    stats: 'errors-only',
};
module.exports = webpackConfig;
