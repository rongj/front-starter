import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import global from './modules/global';
import home from './modules/home';
import login from './modules/login';

import api from '@/services/api';

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
// storage: window.sessionStorage,
// });

export function createStore() {
  return new Vuex.Store({
    state: {
      list: [],
      articleDetail: {}
    },
    actions: {
      fetchList({ commit }, payload) {
        return api.getList(payload).then(res => {
          commit('setList', res.data.data.map(item => {
            return {
              articletp: item.articletp,
              title: item.title,
              articleid: item.articleid
            }
          }))
        })
      },

      fetchDetail({ commit }, payload) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return api.getDetail(payload).then(res => {
          commit('setDetail', res.data.data.article)
        })
      }
    },
    mutations: {
      setList(state, data) {
        state.list = data
      },

      setDetail(state, data) {
        state.articleDetail = data
      },
    },
    modules: {
      global,
      home,
      login,
    },
    // plugins: [vuexLocal.plugin],
  });
}