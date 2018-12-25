import * as types from '../action-types';
import { put, all, call, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

function* increment() {
  yield put({ type: types.INCREASE });
}

function* decrement() {
  yield put({ type: types.DECREASE });
}

function* getUsers() {
  const res = yield call(api.getUsers);
  yield put({ type: types.GETUSERS, payload: res.data || [] });
}

export default function* root() {
  yield all([
    takeLatest('increase', increment),
    takeLatest('decrease', decrement),
    takeLatest('getusers', getUsers),
  ]);
}