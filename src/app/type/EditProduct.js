/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';

export const EditProduct = PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
});

export default EditProduct;
