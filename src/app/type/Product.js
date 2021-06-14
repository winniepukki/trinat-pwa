/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const Product = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string
});
