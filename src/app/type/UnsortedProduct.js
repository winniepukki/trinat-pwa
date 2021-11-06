/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';

export const UnsortedProduct = PropTypes.shape({
    isRecommended: PropTypes.bool,
    isRecent: PropTypes.bool,
    locales: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            lang: PropTypes.string.isRequired
        })
    ),
    price: PropTypes.number.isRequired
});

export default UnsortedProduct;
