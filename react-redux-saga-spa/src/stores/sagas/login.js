import * as types from '../action-types';
import { put, all, call, select, fork, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { message } from 'antd';

function* login() {
  yield put({ type: types.LOGIN })
}

function* changeForm({ payload }) {
  yield put({ type: types.LOGIN_FORMCHANGE, payload })
}

function* changeSubmit() {
  yield put({ type: types.LOGIN_SUBMITING })
}

function* handleLogin({ history }) {
  const { login: { loginForm }, app: { redirect } } = yield select(state => state);

  if(!loginForm.username || !loginForm.password) {
    message.error('缺少参数');
    return;
  }
  yield fork(changeSubmit);
  const res = yield call(api.login, loginForm);
  if(res.code === 200) {
    yield fork(changeSubmit);
    yield fork(changeForm, { payload: { password: '', username: '' } });
    message.success('登录成功');
    yield put({ type: 'updateUser', payload: res.data });
    history.replace(redirect);
  }
}

export default function* root() {
  yield all([
    takeLatest('login', login),
    takeLatest('changeForm', changeForm),
    takeLatest('handleLogin', handleLogin),
  ]);
}