/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app/component/App';
import Loading from './app/component/Loading';

import 'bootstrap/dist/css/bootstrap-grid.css';
import './app/style/main.scss';
import './i18n/i18n';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        const swUrl = './sw.js';
        await navigator.serviceWorker.register(swUrl, { scope: '/' });
    });
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ <Loading /> }>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
