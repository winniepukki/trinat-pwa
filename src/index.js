/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './i18n/i18n';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './app/style/main.scss';

import Loading from '@component/Loading';

const Router = lazy(() => import('@route/Router.component'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        const swUrl = './service-worker.js';
        await navigator.serviceWorker.register(swUrl, { scope: '/' });
    });
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ <Loading /> }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
