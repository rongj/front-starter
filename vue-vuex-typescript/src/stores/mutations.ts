import { MutationTree } from 'vuex';
import { State } from './state';

const mutations: MutationTree<State> = {
  // toggle menu state
  toggleMenu(state: State) {
    state.collapsed = !state.collapsed;
    window.localStorage.setItem('collapsed', '1');
  },

  // change count
  changeCount(state: State, type?: string) {
    type === 'increase' ? state.count++ : state.count--;
  },

  // submit form
  submit(state: State, payload) {
    state[payload as any] = !state[payload as any];
  },

  // login success
  login(state: State, data?: any) {
    state.loginForm = { username: '', password: '' };
    state.user = data;
  },

  // logout
  logout(state: State) {
    state.user = {};
  }
};

export default mutations;