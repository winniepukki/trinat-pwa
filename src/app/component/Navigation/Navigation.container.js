/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import useClientSideDevice from '@util/Script/useClientSideDevice';
import Navigation from './Navigation.component';

export class NavigationContainer extends React.Component {
    containerProps() {
        const { isAndroidDevice } = useClientSideDevice();

        return {
            isAndroidDevice
        };
    }

    render() {
        return (
            <Navigation
              { ...this.containerProps() }
            />
        );
    }
}

export default NavigationContainer;
