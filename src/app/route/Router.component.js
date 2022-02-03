/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

// eslint-disable-next-line winniepukki-guidelines/file-structure
import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';

import useScript from '@util/Script/useScript';
import useGA from '@util/Script/useGA';

import store from '@store/index';

const Navigation = lazy(() => import(
    /* webpackChunkName: "Navigation" */ '@component/Navigation'
));
const App = lazy(() => import(
    /* webpackChunkName: "App" */ '@component/App'
));
const Policy = lazy(() => import(
    /* webpackChunkName: "Policy" */ '@component/Policy'
));
const ScrollTop = lazy(() => import(
    /* webpackChunkName: "ScrollTop" */ '@component/ScrollTop'
));
const Footer = lazy(() => import(
    /* webpackChunkName: "Footer" */ '@component/Footer'
));

export class Router extends React.Component {
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
              className="Router"
            >
              <BrowserRouter>
                  <Provider store={ store }>
                      <Navigation />
                      <Switch>
                          <Route path="/" component={ App } exact />
                          <Route path="/privacy_policy.html" component={ Policy } exact />
                      </Switch>
                      <ScrollTop />
                      <Footer />
                  </Provider>
              </BrowserRouter>
            </section>
        );
    }
}

export default withRouter(Router);
