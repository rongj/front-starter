import * as types from '../action-types';
import { put, all, takeLatest } from 'redux-saga/effects';

function* logout({ redirect }) {
  yield put({ type: types.LOGOUT, payload: redirect });
}

function* updateUser({ payload }) {
  yield put({ type: types.UPDATE_USER, payload });
}

export default function* root() {
  yield all([
    takeLatest('logout', logout),
    takeLatest('updateUser', updateUser),
  ]);
}