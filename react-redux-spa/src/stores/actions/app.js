import * as types from '../action-types';

export const logout = () => {
  return {
    type: types.LOGOUT
  }
}

export const updateUser = data => {
  return {
    type: types.UPDATE_USER,
    payload: data
  }
}