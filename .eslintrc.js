/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'winniepukki-guardian'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'winniepukki-guidelines'
    ],
    rules: {
        'winniepukki-guidelines/derived-class-names': ['error'],
        'winniepukki-guidelines/use-license': ['error', {
            author: 'winniepukki',
            description: 'SIA Trinat restaurant project',
            license: 'MIT'
        }]
    }
};
