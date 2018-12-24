import * as app from './app';
import * as login from './login';
import * as home from './home';
import * as list from './list';
import * as detail from './detail';

export default {
  ...app,
  ...login,
  ...list,
  ...detail,
  ...home
}