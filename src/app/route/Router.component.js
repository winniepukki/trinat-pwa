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

const App = lazy(() => import('@component/App'));

export class Router extends React.Component {
    render() {
        return (
            <section
              className="Router"
            >
              <BrowserRouter>
                  <Provider store={ store }>
                      <Switch>
                          <Route path="/" component={ App } exact />
                      </Switch>
                  </Provider>
              </BrowserRouter>
            </section>
        );
    }
}

export default withRouter(Router);
