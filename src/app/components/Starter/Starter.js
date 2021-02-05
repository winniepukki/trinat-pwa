/* eslint-disable react/prop-types */
import React from 'react';
import { withTranslation } from 'react-i18next';

class Starter extends React.Component {
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
      <div className="starter-item" key={id}>
        <div className="row">
          <div className="col">
            <p className="starter-title">{title}</p>
            <p className="starter-ingredients">{ingredients}</p>
          </div>
          <div className="col">
            <p className="custom-tar">
              {price}
              &euro;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Starter);
