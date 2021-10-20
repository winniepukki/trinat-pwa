/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAIL = 'FETCH_MENU_FAIL';

export const fetchMenuRequest = () => ({
    type: FETCH_MENU_REQUEST
});

export const fetchMenuSuccess = (foodMenu = []) => ({
    type: FETCH_MENU_SUCCESS,
    payload: foodMenu
});

export const fetchMenuFail = (error = '') => ({
    type: FETCH_MENU_FAIL,
    payload: error
});
