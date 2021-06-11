/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const StarterType = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    ingredients: PropTypes.string,
    price: PropTypes.number
});
