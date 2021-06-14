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
    currentAccount: ''
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
    case SUBSCRIBE_ACCOUNT: return {
        ...state,
        currentAccount: action.payload
    };
    case UNSUBSCRIBE_ACCOUNT: return {
        ...state,
        currentAccount: ''
    };
    default: return { ...state };
    }
};

export default accountReducer;
