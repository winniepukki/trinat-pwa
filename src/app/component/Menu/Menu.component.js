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

import './Menu.style.scss';

export class Menu extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        // handleOpenState: PropTypes.func.isRequired,
        // open: PropTypes.bool.isRequired,
        defaultLogo: PropTypes.bool.isRequired,
        menu: RefType.isRequired
    }

    render() {
        const {
            t,
            // open,
            // handleOpenState,
            defaultLogo,
            menu
        } = this.props;

        const logoString = defaultLogo ? '' : '-dark';

        return (
            <section
              className="Menu"
              ref={ menu }
            >
                <div className="container">
                    <div className="row">
                        <div className="Menu-Logo col">
                            <a href="/">
                                <img
                                  className="Logo"
                                  src={ `/assets/img/logo/logo${logoString}.png` }
                                  aria-label={ t('aria.logo') }
                                />
                            </a>
                        </div>
                        <div className="Menu-Links col">
                            { /* <button
                              className="Button Button-Reservation Button-Light"
                              onClick={ handleOpenState }
                              aria-label={ t('aria.open-reservation') }
                            >
                                { t('reservation') }
                            </button>
                            <Reservation open={ open } onClose={ handleOpenState } /> */ }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Menu);
