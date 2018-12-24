import * as types from '../action-types';
import api from '../../services/api';

export const getList = data => {
  return dispatch => {
    return api.getList().then(res => {
      return dispatch({
        type: types.GETLIST,
        payload: res.data.slice(0, 12) || []
      })
    })
  }
}