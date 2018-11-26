import * as types from '../action-types';

const initialState = {
	loginForm: {
		username: '',
		password: ''
	},
	ableSubmit: true
}

export const login = (state = initialState, action) => {
	switch(action.type) {
		case types.LOGIN:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}