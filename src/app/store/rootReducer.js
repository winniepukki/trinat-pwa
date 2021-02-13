import { combineReducers } from 'redux';

import menuListReducer from './MenuList/MenuList.reducer';
import cakeReducer from './CakeStore/CakeStore.reducer';

const rootReducer = combineReducers({
  menuList: menuListReducer,
  cakeList: cakeReducer
});

export default rootReducer;
