/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes, { element } from 'prop-types';

export const ChildrenType = PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(element)
]);

export default ChildrenType;
