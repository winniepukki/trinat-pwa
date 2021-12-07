/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import './Loading.style.scss';

export class Loading extends React.Component {
    render() {
        return (
            <section
              className="Loading"
            >
                <img
                  src="/assets/img/logo/logo-img.png"
                  alt="Page loading status"
                />
            </section>
        );
    }
}

export default Loading;
