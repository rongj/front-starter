<template>
  <div id="root">
    <a-layout id="components-layout-demo-fixed" v-if="!$route.meta.singleLayout">
      <a-layout-header>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';
import { Layout, Dropdown, Menu, Icon } from 'ant-design-vue';

Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);

export default {
  data() {
    return {
      currentPath: '/',
      user: {}
    }
  },

  methods: {
    toggleMenu: function() {

    },

    changeMenu: function() {

    },

    handleLogout: function() {

    }
  }
}

</script>

<style lang="scss">
@import '@/styles/layout.scss';
</style>
