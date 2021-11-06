/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isRecommended: PropTypes.bool,
    isRecent: PropTypes.bool
});

export default ProductType;
