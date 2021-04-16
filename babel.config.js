/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                modules: false
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties'
    ]
};
