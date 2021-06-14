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

import menuListReducer from './MenuList/MenuList.reducer';
import cakeReducer from './CakeStore/CakeStore.reducer';
import accountReducer from './Account/Account.reducer';

const rootReducer = combineReducers({
    menuList: menuListReducer,
    cakeList: cakeReducer,
    account: accountReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
