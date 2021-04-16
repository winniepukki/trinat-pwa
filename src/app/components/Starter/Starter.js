/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Starter extends React.Component {
  static propTypes = {
      starter: PropTypes.instanceOf(Object).isRequired
  };

  render() {
      const {
          starter: {
              id,
              title,
              ingredients,
              price
          }
      } = this.props;

      return (
          <div className="starter-item" key={ id }>
            <div className="row">
              <div className="col">
                <p className="starter-title">{ title }</p>
                <p className="starter-ingredients">{ ingredients }</p>
              </div>
              <div className="col">
                <p className="custom-tar">
                  { price }
                  &euro;
                </p>
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Starter);
