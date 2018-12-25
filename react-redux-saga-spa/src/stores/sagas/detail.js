import * as types from '../action-types';
import { put, all, call, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

function* getDetail({ id }) {
	const res = yield call(api.getDetail, { id });
  yield put({ type: types.GETDETAIL, payload: res.data });
}

export default function* root() {
  yield all([
    takeLatest('getDetail', getDetail),
  ]);
}