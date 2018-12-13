import { ActionTree } from 'vuex';
import { State } from './state';
import api from '@/services/api';
import { message } from 'ant-design-vue';

import router from '../router';
import { getQueryString } from '@/utils/global';

const actions: ActionTree<State, any> = {
  // login
  async handleLogin({ state, commit }, data) {
    const { username, password } = data;
    if (!username || !password) {
      message.error('缺少参数');
      return;
    }
    commit('submit', 'ableSubmit');
    const res: Ajax.AjaxResponse = await api.login(data);
    if (res.code === 200) {
      message.success('登录成功');
      commit('submit', 'ableSubmit');
      commit('login', res.data);
      const redirectUrl = getQueryString('redirectUrl') || '/';
      router.replace(redirectUrl);
    }
  },

  // increase
  increament({ state, commit }) {
    // dosomething
    commit('changeCount', 'increase');
  },

  // decrease
  decreament({ state, commit }) {
    // dosomething
    commit('changeCount', 'decrease');
  },

};

export default actions;
