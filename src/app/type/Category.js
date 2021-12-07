/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';

export const CategoryType = PropTypes.shape({
    key: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.number.isRequired,
            isRecommended: PropTypes.bool,
            isRecent: PropTypes.bool
        })
    )
});

export default CategoryType;
