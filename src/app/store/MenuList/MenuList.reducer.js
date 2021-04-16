/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAIL
} from './MenuList.action';

const initialState = {
    loading: false,
    foodMenu: [],
    error: ''
};

const menuListReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MENU_REQUEST: return {
        ...state,
        loading: true
    };
    case FETCH_MENU_SUCCESS: return {
        loading: false,
        foodMenu: action.payload,
        error: ''
    };
    case FETCH_MENU_FAIL: return {
        loading: false,
        foodMenu: [],
        error: action.payload
    };
    default: return { ...state };
    }
};

export default menuListReducer;
