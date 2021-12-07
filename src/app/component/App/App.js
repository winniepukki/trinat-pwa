/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import { withTranslation } from 'react-i18next';

import Contents from '@component/Contents';

import ErrorBoundary from '@util/ErrorBoundary/ErrorBoundary';
import useScript from '@util/Script/useScript';
import useGA from '@util/Script/useGA';

export class App extends React.Component {
    componentDidMount() {
        /* Google Analytics */
        useScript('https://www.googletagmanager.com/gtag/js?id=G-9VHZCCXJS9', true);
        useGA('G-9VHZCCXJS9');

        /* Font Awesome */
        useScript('https://use.fontawesome.com/releases/v5.15.1/js/all.js');
    }

    render() {
        return (
            <section
              className="App"
            >
                <ErrorBoundary>
                    <Contents />
                </ErrorBoundary>
            </section>
        );
    }
}

export default withTranslation()(App);
