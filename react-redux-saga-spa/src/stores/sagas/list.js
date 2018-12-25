import * as types from '../action-types';
import { put, all, call, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

function* getList() {
	const res = yield call(api.getList);
  yield put({ type: types.GETLIST, payload: res.data.slice(0, 12) || [] });
}

export default function* root() {
  yield all([
    takeLatest('getList', getList),
  ]);
}