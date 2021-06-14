/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';

import './Scroll.style.scss';

class Scroll extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
          <div className="Scroll-Top">
            <div className="container">
                <button
                  type="button"
                  className="scroll-top-button"
                  onClick={ this.handleClick }
                  aria-label="Scroll to top button"
                >
                  <i className="far fa-arrow-alt-circle-up" />
                </button>
            </div>
          </div>
        );
    }
}

export default Scroll;
