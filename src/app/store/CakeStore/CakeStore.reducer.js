/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import { BUY_CAKE } from './CakeStore.action';

const initialState = {
    numOfCakes: 25
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
    case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
    };
    default: return { ...state };
    }
};

export default cakeReducer;
