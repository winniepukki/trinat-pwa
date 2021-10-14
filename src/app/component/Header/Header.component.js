/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import './Header.style.scss';

export class Header extends React.Component {
    render() {
        return (
            <section
              className="Header"
            >
                <div className="container">
                    <div className="row">
                        <div className="Header-Details col-sm-5">
                            <a href="#">123</a>
                            <a href="#">123</a>
                        </div>
                        <div className="Header-Social col-sm-5">
                            <a href="#">123</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
