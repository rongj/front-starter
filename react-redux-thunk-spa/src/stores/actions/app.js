import * as types from '../action-types';

export const logout = data => {
  return {
    type: types.LOGOUT,
    payload: data
  }
}

export const updateUser = data => {
  return {
    type: types.UPDATE_USER,
    payload: data
  }
}