/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';

import './foodMenu.style.scss';
import { withTranslation } from 'react-i18next';

class FoodMenu extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);

      this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle() {
      const { t } = this.props;
      return (
          <h3>
            <div className="parallax-headline">{ t('our') }</div>
            <div className="parallax-title">{ t('food-menu.title') }</div>
          </h3>
      );
  }

  render() {
      const { t } = this.props;

      this.tabMap = {
          // TO-DO: Implement tabmap for the FoodMenuComponent
      };

      return (
          <div>
            <section className="food-menu">
              <div className="section-title">
                { this.renderTitle() }
              </div>
            </section>
            <div className="container">
              <h4 className="custom-tac">{ t('food-menu.day-menus') }</h4>
              <div className="container">
                <div className="row">
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                  <div className="starter-item col-md-6">
                    <div className="row">
                      <div className="col">
                        <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                        <p className="starter-ingredients">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                      <div className="col">
                        <p className="custom-tar">3.43&euro;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between custom-mg-25" />
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(FoodMenu);
