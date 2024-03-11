/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';

import React from 'react';

import { withTranslation } from 'react-i18next';

import './GetAndroidApp.style.scss';

export class GetAndroidApp extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    }

    render() {
        const { open, handleOpenState, t } = this.props;

        if (!open) {
            return null;
        }

        return (
            <div className="GetAndroidApp">
                <button
                  className="Button Button-GetAndroidApp-Close"
                  onClick={ handleOpenState }
                >
                    x
                </button>
                <img
                  src="/assets/icons/icon-120x120.png"
                  className="GetAndroidApp-Logo"
                  height={ 50 }
                  width={ 50 }
                  alt=""
                />
                <div className="GetAndroidApp-Text-Contents">
                    <p className="GetAndroidApp-Text-Contents-Headline">
                        { t('trinat-app') }
                    </p>
                    <p className="GetAndroidApp-Text-Contents-Marketing">
                        { t('download-free') }
                    </p>
                </div>
                <a
                  className="GetAndroidApp-View-Now-Button"
                  href="https://play.google.com/store/apps/details?id=my.winnie.trinat"
                  aria-label={ t('aria.link-app-play-store') }
                >
                    { t('view') }
                </a>
            </div>
        );
    }
}

export default withTranslation()(GetAndroidApp);
