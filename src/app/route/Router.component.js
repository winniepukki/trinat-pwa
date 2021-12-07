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

import store from '@store/index';

const Navigation = lazy(() => import(
    /* webpackChunkName: "Navigation" */ '@component/Navigation'
));
const App = lazy(() => import(
    /* webpackChunkName: "App" */ '@component/App'
));
const ScrollTop = lazy(() => import(
    /* webpackChunkName: "ScrollTop" */ '@component/ScrollTop'
));
const Footer = lazy(() => import(
    /* webpackChunkName: "Footer" */ '@component/Footer'
));

export class Router extends React.Component {
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
