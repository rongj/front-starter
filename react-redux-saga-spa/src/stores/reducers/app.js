import * as types from '../action-types';

const initialState = {
  user: null,
  redirect: '/'
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT:
    console.log(action.payload);
      return {
        ...state,
        user: null,
        redirect: action.payload || '/'
      }
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}