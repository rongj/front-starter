import * as types from '../action-types';
import api from '../../services/api';

export const getDetail = data => {
  return dispatch => {
    return api.getDetail(data).then(res => {
      return dispatch({
        type: types.GETDETAIL,
        payload: res.data.data
      })
    })
  }
}