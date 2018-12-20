import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';
import home from './modules/home';
import login from './modules/login';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    global,
    home,
    login,
  }
});

export default store;