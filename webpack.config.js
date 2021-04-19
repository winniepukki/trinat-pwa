/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PORT = 4000;
const paths = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    public: path.join(__dirname, './src/public'),
    assets: path.join(__dirname, './src/public/assets'),
    components: path.resolve(__dirname, './src/app/components'),
    store: path.resolve(__dirname, './src/app/store'),
    util: path.resolve(__dirname, './src/app/util')
};

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    externals: {
        paths
    },
    devServer: {
        port: PORT,
        contentBase: paths.dist,
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@components': paths.components,
            '@store': paths.store,
            '@util': paths.util
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/public/assets/images/', to: 'assets/img' },
                { from: './src/public/assets/font/', to: 'assets/font' },
                { from: './src/public/assets/favicon', to: 'assets/favicon' }
            ]
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
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
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
