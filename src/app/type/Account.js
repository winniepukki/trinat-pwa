/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';

export const AccountType = PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
});

export default AccountType;
