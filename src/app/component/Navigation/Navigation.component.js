/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Header from '@component/Header';
import Menu from '@component/Menu';

import './Navigation.style.scss';

export class Navigation extends React.Component {
    render() {
        return (
            <section
              className="Navigation"
            >
                <Header />
                <Menu />
            </section>
        );
    }
}

export default Navigation;
