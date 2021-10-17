/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import { withTranslation } from 'react-i18next';

import Navigation from '@component/Navigation';
import AppContents from '@component/AppContents';
import ScrollTop from '@component/ScrollTop';
import Footer from '@component/Footer';

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
                    <Navigation />
                    <AppContents />
                    <ScrollTop />
                    <Footer />
                </ErrorBoundary>
            </section>
        );
    }
}

export default withTranslation()(App);
