import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import global from './modules/global';
import home from './modules/home';
import login from './modules/login';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

export function createStore() {
  return new Vuex.Store({
    modules: {
      global,
      home,
      login,
    },
    plugins: [vuexLocal.plugin],
  });
}