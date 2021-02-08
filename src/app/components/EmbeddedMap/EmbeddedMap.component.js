/* eslint-disable */
import React from 'react';
import {
    MAP_SRC,
    MAP_WIDTH,
    MAP_HEIGHT
} from './EmbeddedMap.config';
import './EmbeddedMap.style.scss';
import { withTranslation } from 'react-i18next';

class EmbeddedMapComponent extends React.Component {
  render() {
    return (
      <div className={'EmbeddedMap-Component'}>
          <iframe
              src={MAP_SRC}
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
          />
      </div>
    );
  }
}

export default withTranslation()(EmbeddedMapComponent);
