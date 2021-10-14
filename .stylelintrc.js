/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

module.exports = {
    'plugins': [
        'stylelint-scss',
        'stylelint-order'
    ],
    'fix': true,
    'extends': [
        'stylelint-config-standard'
    ],
    'rules': {
        'unit-allowed-list': ['ms', 'fr', 'em', 'rem', '%', 's', 'vmin', 'vmax', 'vh', 'deg'],
        'at-rule-no-unknown': null,
        'at-rule-empty-line-before': null,
        'declaration-empty-line-before': null,
        'indentation': 4,
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'string-quotes': ['single', { 'avoidEscape': true }],
        'scss/at-rule-no-unknown': true,
        'scss/selector-no-redundant-nesting-selector': true,
        'order/order': [
            'custom-properties',
            'declarations',
            'rules'
        ]
    }
}
