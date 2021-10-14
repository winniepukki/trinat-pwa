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
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';

import store from '@store/index';

const App = lazy(() => import('@component/App'));

export class Home extends React.Component {
    render() {
        return (
            <section
              className="Home"
            >
              <div
                className="Home-Wrapper"
              >
                  <Router>
                      <Provider store={ store }>
                          <Switch>
                              <Route path="/" component={ App } exact />
                          </Switch>
                      </Provider>
                  </Router>
              </div>
            </section>
        );
    }
}

export default withRouter(Home);
