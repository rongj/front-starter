import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

// import state from './state';
// import mutations from './mutations';
// import actions from './actions';
// import getters from './getters';

import global from './modules/global';
import home from './modules/home';
import login from './modules/login';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters,
  modules: {
    global,
    home,
    login,
  },
  plugins: [vuexLocal.plugin],
});