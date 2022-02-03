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

export class App extends React.Component {
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
