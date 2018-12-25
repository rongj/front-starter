import * as types from '../action-types';
import api from '../../services/api';

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

export const getUsers = data => {
  return dispatch => {
    return api.getUsers().then(res => {
      return dispatch({
        type: types.GETUSERS,
        payload: res.data || []
      })
    })
  }
}