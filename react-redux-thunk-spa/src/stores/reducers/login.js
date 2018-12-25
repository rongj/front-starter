import * as types from '../action-types';

const initialState = {
  loginForm: {
    username: '',
    password: ''
  },
  ableSubmit: true
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FORMCHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          ...action.payload
        }
      }
    case types.LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case types.LOGIN_SUBMITING:
      return {
        ...state,
        ableSubmit: !state.ableSubmit
      }
    default:
      return state
  }
}