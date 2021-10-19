/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import RefType from '@type/Ref';

export class ScrollTop extends React.Component {
    static propTypes = {
        handleClick: PropTypes.func.isRequired,
        scrollButtonRef: RefType.isRequired
    }

    render() {
        const {
            handleClick,
            scrollButtonRef
        } = this.props;

        return (
            <button
              type="button"
              className="Button Button-Scroll-Top Text-Dark"
              onClick={ handleClick }
              aria-label="Scroll to top button"
              ref={ scrollButtonRef }
            >
                <i className="fas fa-chevron-up" />
            </button>
        );
    }
}

export default ScrollTop;
