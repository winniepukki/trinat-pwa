/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import {
    SUBSCRIBE_ACCOUNT,
    UNSUBSCRIBE_ACCOUNT
} from './Account.action';

const initialState = {
    account: {
        email: '',
        name: '',
        admin: false
    }
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
    case SUBSCRIBE_ACCOUNT: return {
        ...state,
        account: action.payload
    };
    case UNSUBSCRIBE_ACCOUNT: return {
        ...state,
        account: {}
    };
    default: return { ...state };
    }
};

export default accountReducer;
