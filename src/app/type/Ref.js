/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';

export const RefType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
]);

export default RefType;
