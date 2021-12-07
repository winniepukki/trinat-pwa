/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import {
    combineReducers,
    createStore
} from 'redux';

import accountReducer from './Account/Account.reducer';

const rootReducer = combineReducers({
    AccountReducer: accountReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
