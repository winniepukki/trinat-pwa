/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import {
    MAP_URL
} from './Map.config';

import './Map.style.scss';

export class Map extends React.Component {
    render() {
        return (
            <section
              className="Map"
            >
                <iframe
                  title="Map"
                  className="Map-Frame"
                  src={ MAP_URL }
                  allowFullScreen=""
                  loading="lazy"
                />
            </section>
        );
    }
}

export default Map;
