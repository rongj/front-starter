import { all, fork } from 'redux-saga/effects';

import app from './app';
import home from './home';
import list from './list';
import detail from './detail';
import login from './login';

export default function* root() {
  yield all([
    fork(app),
    fork(home),
    fork(list),
    fork(detail),
    fork(login),
  ]);
}