/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';
import { withTranslation } from 'react-i18next';

import Header from '@component/Header';

import ErrorBoundary from '@util/ErrorBoundary/ErrorBoundary';
import AppContents from '@component/AppContents';
import Reservation from '@component/Reservation';

export class App extends React.Component {
    render() {
        return (
            <section
              className="App"
            >
                <ErrorBoundary>
                    <Header />
                    <AppContents />
                    <Reservation />
                </ErrorBoundary>
            </section>
        );
    }
}

export default withTranslation()(App);
