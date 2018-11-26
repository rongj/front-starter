import * as types from '../action-types';

const initialState = {
	user: {
		username: 'admin'
	}
}

export const app = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGOUT:
			return {
				...state,
				user: {}
			}
		default:
			return state;
	}
}