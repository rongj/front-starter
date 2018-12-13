import router from '../router';

export interface User {
  id?: number;
  username?: string;
  token?: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface State {
  router?: any;
  user?: User;
  collapsed: boolean;
  count: number;
  loginForm: LoginForm;
  ableSubmit: boolean;
}

const state: State = {
  router,

  user: {},
  collapsed: !!window.localStorage.getItem('collapsed'),

  count: 0,

  loginForm: {
    username: '',
    password: '',
  },

  ableSubmit: true,
};

export default state;
