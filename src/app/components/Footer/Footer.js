import React from 'react';
import { withTranslation } from 'react-i18next';

import './footer.style.scss';
import creamcamp from './creamcamp.svg';

import apple from '../../../public/assets/images/social/apple.svg';
import visa from '../../../public/assets/images/social/visa.svg';
import masterCard from '../../../public/assets/images/social/mastercard.svg';
import americanExpress from '../../../public/assets/images/social/americanexpress.svg';
import Scroll from '../Scroll/Scroll';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderFooterNotice = this.renderFooterNotice.bind(this);
  }

  renderFooter() {
    const { t } = this.props;
    return (
      <div className="footer">
        <Scroll showBelow={250} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>
                <p>{t('trinat.title')}</p>
                <p>{t('trinat.type')}</p>
              </h5>
              <p className="simple-text">{t('footer-text')}</p>
              <div className="custom-grid-4">
                <img src={apple} alt="" />
                <img src={visa} alt="" />
                <img src={masterCard} alt="" />
                <img src={americanExpress} alt="" />
              </div>
            </div>
            <div className="col-sm-3">
              <h6>{t('recent-posts')}</h6>
            </div>
            <div className="col-sm-3">
              <h6>{t('view-gallery')}</h6>
            </div>
            <div className="col-sm-3">
              <h6>{t('footer-contact-info')}</h6>
              <p className="simple-text">
                <i className="fas fa-map-marker-alt" />
                <span>{this.props.address.line}</span>
              </p>
              <p className="simple-text">
                <i className="fas fa-phone-alt" />
                <a
                  href={`tel:${this.props.phone}`}
                >
                  {this.props.phone}
                </a>
              </p>
              <p className="simple-text">
                <i className="fas fa-at" />
                <a
                  href={`mailto:${this.props.mail}`}
                >
                  {this.props.mail}
                </a>
              </p>
              <p className="simple-text">
                <i className="fas fa-globe" />
                <span>{this.props.web}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderFooterNotice() {
    const { t } = this.props;
    return (
      <div className="footer-notice">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-6 custom-flexbox custom-align-ic">
              <a href="https://cream.camp"><img src={creamcamp} alt="" className="copyright" /></a>
              <span className="footer-notice-text">{t('copyright')}</span>
            </div>
            <div className="col-sm-6">
              <ul className="footer-links">
                {
                    Object.values(t('footer-menu', { returnObjects: true })).map((item, index) => (
                      <li key={index} className="footer-notice-text">
                        <a href="#">{item}</a>
                      </li>
                    ))
                  }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderFooter() }
        { this.renderFooterNotice() }
      </div>
    );
  }
}

Footer.defaultProps = {
  address: {
    line: 'Kurzemes prospekts 92a, Imanta, Riga, Latvia',
    url: 'https://goo.gl/maps/fm1VYskY9HckKctq6',
  },
  phone: '+371 20000000',
  mail: 'info@trinat.lv',
  web: 'trinat.lv',
};

export default withTranslation()(Footer);
