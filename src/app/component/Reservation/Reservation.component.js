/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { LANG_CODE_LV } from '@component/App/App.config';
import {
    RESERVATION_PHONE_PRIMARY,
    RESERVATION_PHONE_SECONDARY
} from './Reservation.config';

import { Trans, withTranslation } from 'react-i18next';

import './Reservation.style.scss';

class Reservation extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired,
      handler: PropTypes.func.isRequired,
      lang: PropTypes.string.isRequired
  };

  constructor(props) {
      super(props);
      this.renderReservationNotice = this.renderReservationNotice.bind(this);
  }

  renderReservationNotice() {
      const { t } = this.props;
      const reservation = RESERVATION_PHONE_PRIMARY;
      const reservation_sec = RESERVATION_PHONE_SECONDARY;

      return (
          <p className="reservation-notice">
              <Trans
                i18nKey="reservation-notice"
              >
                  { t('reservation-notice') }
                  <a href={ `tel:${reservation}` }>
                    { { reservation } }
                  </a>
                  <a href={ `tel:${reservation_sec}` }>
                    { { reservation_sec } }
                  </a>
              </Trans>
          </p>
      );
  }

  handleInsideElementClick(e) {
      e.stopPropagation();
  }

  render() {
      const {
          t,
          handler,
          lang
      } = this.props;

      return (
          <div className="Reservation-Form" onClick={ handler }>
            <div
              className="Reservation-Form-Wrapper"
              onClick={ this.handleInsideElementClick }
            >
              <h2 className="custom-tac">
                { lang === LANG_CODE_LV ? (
                    <p className="title-first">{ t('table') }</p>
                ) : <p className="title-first" style={ { marginTop: '72px' } } /> }
                <p className="title-caption">{ t('reservation') }</p>
              </h2>
              <div className="container">
                { this.renderReservationNotice() }
              </div>
              <button
                type="button"
                onClick={ handler }
                className="reservation-close-btn"
                aria-label="Close reservation button"
              >
                <i className="far fa-times-circle" />
              </button>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Reservation);
