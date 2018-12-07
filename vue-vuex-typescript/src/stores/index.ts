import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import state, { State } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store<State>({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
});
