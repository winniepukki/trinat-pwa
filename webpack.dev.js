/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const PORT = 5000;

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: PORT,
        watchFiles: {
            paths: ['src/**/*']
        },
        open: true
    }
});
