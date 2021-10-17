/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

export class ScrollTop extends React.Component {
    handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <button
              type="button"
              className="Button Button-Scroll-Top Text-Dark"
              onClick={ this.handleClick }
              aria-label="Scroll to top button"
            >
                <i className="fas fa-chevron-up" />
            </button>
        );
    }
}

export default ScrollTop;
