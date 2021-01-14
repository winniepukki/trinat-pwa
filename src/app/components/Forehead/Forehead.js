import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

import './forehead.style.scss';

import lv from './latvia.svg';
import ru from './russia.svg';

class Forehead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currentScrollPos = window.pageYOffset;
    const heroFrame = document.getElementById('hero').offsetHeight;
    if (currentScrollPos > heroFrame) {
      this.setState({
        menu: false
      });
    } else {
      this.setState({
        menu: true
      });
    }
  }

  handleLanguage() {
    const { i18n, parentCallback } = this.props;

    if (i18n.language === 'lv') {
      parentCallback('ru');
    } else {
      parentCallback('lv');
    }
  }

  render() {
    const { menu } = this.state;

    return (
      <div className={menu ? 'forehead' : 'hidden'}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col forehead-item">
              <span>
                <i className="fas fa-map-marker-alt" />
                {' '}
                <a href="#">address</a>
              </span>
              <span>
                <i className="fas fa-phone-alt" />
                <a href={`tel:`}>phone</a>
              </span>
            </div>
            <div className="col forehead-item custom-tar">
              <a href="#"><i className="fab fa-facebook-square" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a onClick={this.handleLanguage}>
                {
                  i18next.language === 'lv'
                    ? (
                      <span>
                        <img src={ru} alt="Русский язык" className="language-switcher" />
                        <span>по-русски</span>
                      </span>
                    )
                    : (
                      <span>
                        <img src={lv} alt="Latviešu valoda" className="language-switcher" />
                        <span>latviski</span>
                      </span>
                    )
                        }
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Forehead.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  i18n: PropTypes.object.isRequired,
  parentCallback: PropTypes.func.isRequired
};

export default withTranslation()(Forehead);
