import * as types from '../action-types';
import api from '../../services/api';
import { message } from 'antd';

export const login = () => {
  return {
    type: types.LOGIN
  }
}

export const changeForm = formdata => {
  return {
    type: types.LOGIN_FORMCHANGE,
    payload: formdata
  }
}

export const changeSubmit = () => {
  return {
    type: types.LOGIN_SUBMITING
  }
}

export function handleLogin(data) {
  return dispatch => {
    dispatch(changeSubmit());
    return api.login(data).then(res => {
      if(res.code === 200) {
        message.success('登录成功');
        dispatch(changeSubmit());
        dispatch(login());
        return res.data;
      }
    })
  }
} 
