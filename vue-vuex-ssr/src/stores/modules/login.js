import api from '@/services/api';
import { message } from 'ant-design-vue';

import { getQueryString } from '@/utils/global';
import { createApp } from '@/main';
const { router } = createApp();

export default {
  namespaced: true,
  state: {
    loginForm: {
      username: '',
      password: '',
    },

    ableSubmit: true,
  },
  actions: {
    // login
    async handleLogin({ state, commit }, data) {
      const { username, password } = data;
      if (!username || !password) {
        message.error('缺少参数');
        return;
      }
      commit('submit', 'ableSubmit');
      const res = await api.login(data);
      if (res.code === 200) {
        message.success('登录成功');
        commit('submit', 'ableSubmit');
        commit('login', res.data);
        commit('global/updateUser', res.data, { root: true });
        const redirectUrl = getQueryString('redirectUrl') || '/';
        router.replace(redirectUrl);
      }
    },
  },
  mutations: {
    // submit form
    submit(state, payload) {
      state[payload] = !state[payload];
    },

    // login success
    login(state, data) {
      state.loginForm = { username: '', password: '' };
    },
  }
}