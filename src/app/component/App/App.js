/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Navigation from '@component/Navigation';
import AppContents from '@component/AppContents';

import ErrorBoundary from '@util/ErrorBoundary/ErrorBoundary';
import useScript from '@util/Script/useScript';

export class App extends React.Component {
    componentDidMount() {
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
                </ErrorBoundary>
            </section>
        );
    }
}

export default App;
