import * as types from '../action-types';

const initialState = {
	loginForm: {
		username: '',
		password: ''
	}
}

export const login = (state = initialState, action) => {
	switch(action.type) {
		case types.LOGIN:
			
			break;
		default:
			return state
	}
}