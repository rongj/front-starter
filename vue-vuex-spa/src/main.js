import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import { sync } from 'vuex-router-sync';

import '@/styles/common.scss';

import { message } from 'ant-design-vue';
import Component from 'vue-class-component';

Vue.config.productionTip = false;
Vue.prototype.$message = message;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
