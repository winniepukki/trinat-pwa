/* eslint-disable import/no-extraneous-dependencies */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    public: path.join(__dirname, './src/public'),
    assets: path.join(__dirname, './src/public/assets'),
    component: path.resolve(__dirname, './src/app/component'),
    route: path.resolve(__dirname, './src/app/route'),
    store: path.resolve(__dirname, './src/app/store'),
    type: path.resolve(__dirname, './src/app/type'),
    util: path.resolve(__dirname, './src/app/util'),
    query: path.resolve(__dirname, './src/app/query')
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: paths.dist,
        filename: '[name].js'
    },
    externals: {
        paths
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    reuseExistingChunk: true
                }
            }
        }
    },
    resolve: {
        alias: {
            '@component': paths.component,
            '@route': paths.route,
            '@store': paths.store,
            '@util': paths.util,
            '@type': paths.type,
            '@query': paths.query
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/public/privacy_policy.html',
            filename: './privacy_policy.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/public/assets/img/', to: 'assets/img' },
                { from: './src/public/assets/icons/', to: 'assets/icons' },
                { from: './src/public/assets/docs/', to: 'assets/docs' },
                { from: './src/public/assets/fonts/', to: 'assets/fonts' },
                { from: './src/public/assets/favicon', to: 'assets/favicon' },
                { from: './src/public/manifest.json', to: './manifest.json' },
                { from: './src/sw.js', to: './service-worker.js' }
            ]
        }),
        new webpack.DefinePlugin({
            'process.env': {
                LOGROCKET_APP_ID: JSON.stringify(process.env.LOGROCKET_APP_ID)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts',
                    type: 'asset/resource',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath: path.resolve(__dirname, '/assets/img'),
                    outputPath: 'assets/img',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};
