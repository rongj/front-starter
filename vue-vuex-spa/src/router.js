import Vue from 'vue';
import Router from 'vue-router';
import store from './stores';

import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: {
        title: 'home page',
        requireAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'about page',
        requireAuth: true,
      },
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
      meta: {
        title: 'list page',
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'login page',
        requireAuth: false,
        singleLayout: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && JSON.stringify(store.state.global.user) === '{}') {
    router.push({
      name: 'login',
      query: {
        redirectUrl: to.path
      }
    });
  }
  next();
});

export default router;
