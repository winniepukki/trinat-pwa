/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import RefType from '@type/Ref';

export class ScrollTop extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleClick: PropTypes.func.isRequired,
        scrollButtonRef: RefType.isRequired
    }

    render() {
        const {
            t,
            handleClick,
            scrollButtonRef
        } = this.props;

        return (
            <button
              type="button"
              className="Button Button-Scroll-Top Text-Dark"
              onClick={ handleClick }
              ref={ scrollButtonRef }
              aria-label={ t('aria.scroll-top') }
            >
                <i className="fas fa-chevron-up" />
            </button>
        );
    }
}

export default withTranslation()(ScrollTop);
