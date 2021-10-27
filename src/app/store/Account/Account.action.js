/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

export const SUBSCRIBE_ACCOUNT = 'SUBSCRIBE_ACCOUNT';
export const UNSUBSCRIBE_ACCOUNT = 'UNSUBSCRIBE_ACCOUNT';

const initialState = {
    account: {
        email: '',
        name: ''
    }
};

export const subscribeAccount = (account = initialState) => ({
    type: SUBSCRIBE_ACCOUNT,
    payload: account
});

export const unsubscribeAccount = () => ({
    type: UNSUBSCRIBE_ACCOUNT
});
