/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';

import './scroll.style.scss';

class Scroll extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
          <div className="scroll-top">
            <div className="container">
                <button
                  type="button"
                  className="scroll-top-button"
                  onClick={ this.handleClick }
                >
                  <i className="far fa-arrow-alt-circle-up" />
                </button>
            </div>
          </div>
        );
    }
}

export default Scroll;
