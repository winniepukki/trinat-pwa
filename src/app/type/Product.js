/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.shape({
        title: PropTypes.string,
        priority: PropTypes.number
    }),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promotion: PropTypes.string
});

export default ProductType;
