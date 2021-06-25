/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Category.style.scss';

class Category extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        const {
            t,
            title = ''
        } = this.props;

        return (
            <div className="Category">
                { t(`category.${title}`) }
            </div>
        );
    }
}

export default withTranslation()(Category);
