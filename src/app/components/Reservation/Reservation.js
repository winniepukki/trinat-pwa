import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import './reservation.style.scss';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleChange());
  }

  handleChange() {
    const formItems = document.querySelectorAll('.form-control');
    formItems.forEach((item) => {
      item.addEventListener('blur', function () {
        if (this.value.length > 0) {
          this.classList.add('has-value');
        } else {
          this.classList.remove('has-value');
        }
      });
    });
  }

  render() {
    const { t, handler } = this.props;
    return (
      <div className="reservation-form">
        <div className="reservation-form-wrapper">
          <h2 className="custom-tac">
            <p className="title-first">Table</p>
            <p className="title-caption">Booking</p>
          </h2>
          <div className="container">
            <div className="row custom-mg-25">
              <div className="col-sm-4">
                <input type="email" className="form-control" />
                <label>{t('reservation-items.email')}</label>
              </div>
              <div className="col-sm-4">
                <input type="tel" className="form-control" />
                <label>{t('reservation-items.phone')}</label>
              </div>
              <div className="col-sm-4">
                <input type="text" className="form-control" />
                <label>{t('reservation-items.name')}</label>
              </div>
            </div>
            <div className="row custom-mg-25">
              <div className="col-sm-4">
                <input type="date" className="form-control" />
                <label>{t('reservation-items.date')}</label>
              </div>
              <div className="col-sm-4">
                <input type="time" className="form-control" />
                <label>{t('reservation-items.time')}</label>
              </div>
              <div className="col-sm-4">
                <select className="form-control">
                  {
                    Object.values(t('reservation-items.people', { returnObjects: true })).map((item, index) => <option value={index + 1} key={index}>{item}</option>)
                  }
                </select>
              </div>
            </div>
            <button type="button" className="button-default button-light" style={{ margin: '0 auto 25px auto' }}>{t('send')}</button>
          </div>
          <button type="button" onClick={handler} className="reservation-close-btn"><i className="far fa-times-circle" /></button>
        </div>
      </div>
    );
  }
}

Reservation.propTypes = {
  t: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
};

export default withTranslation()(Reservation);
