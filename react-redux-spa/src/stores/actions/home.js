import * as types from '../action-types';

export const increase = () => {
    return {
        type: types.INCREASE
    }
}

export const decrease = () => {
    return {
        type: types.DECREASE
    }
}