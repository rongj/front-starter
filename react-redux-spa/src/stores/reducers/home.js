import * as types from '../action-types';

const initialState = {
	count: 0
}

export const home = (state = initialState, action) => {
	switch (action.type) {
        case types.INCREASE:
			return {
				...state,
				count: state.count + 1
			}
        case types.DECREASE:
			return {
				...state,
				count: state.count - 1
			}
		default:
			return state;
	}
}