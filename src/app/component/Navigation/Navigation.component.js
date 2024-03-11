/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import PropTypes from 'prop-types';

import Header from '@component/Header';
import Menu from '@component/Menu';

import './Navigation.style.scss';
import GetAndroidApp from '@component/GetAndroidApp';

export class Navigation extends React.Component {
    static propTypes = {
        isAndroidDevice: PropTypes.bool.isRequired
    }

    render() {
        const { isAndroidDevice } = this.props;

        return (
            <section
              className="Navigation"
            >
                { isAndroidDevice && (
                    <GetAndroidApp />
                ) }
                <Header />
                <Menu />
            </section>
        );
    }
}

export default Navigation;
