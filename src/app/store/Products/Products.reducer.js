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
} from './Products.action';

const initialState = {
    loading: false,
    products: [],
    error: ''
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MENU_REQUEST: return {
        ...state,
        loading: true
    };
    case FETCH_MENU_SUCCESS: return {
        loading: false,
        products: action.payload,
        error: ''
    };
    case FETCH_MENU_FAIL: return {
        loading: false,
        products: [],
        error: action.payload
    };
    default: return { ...state };
    }
};

export default productsReducer;
