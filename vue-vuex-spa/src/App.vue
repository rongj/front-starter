<template>
  <div id="root">
    <a-layout class="main-wrapper" v-if="!$route.meta.singleLayout">
      <a-layout-sider
        class="main-sider"
        width=240
        :trigger="null"
        collapsible
        v-model="collapsed"
      >
        <div class="sider-logo" />
        <a-menu 
          class="main-menu scrollbar-primary"
          theme="dark"
          mode="inline"
          @click="changeMenu"
          :selectedKeys="[currentPath]">
          <a-menu-item key="/">
            <a-icon type="user" />
            <span>home</span>
          </a-menu-item>
          <a-menu-item key="/list">
            <a-icon type="bars" />
            <span>list</span>
          </a-menu-item>
          <a-menu-item key="/about">
            <a-icon type="home" />
            <span>about</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="main-layout">
        <a-layout-header class="main-header clearfix">
          <div class="main-header-left">                    
            <a-icon
              class="header-trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => toggleMenu()"
            />
          </div>
          <div class="main-header-right">
            <a-dropdown>
              <a class="ant-dropdown-link" href="#">
                {{ user.username }} <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item @click="handleLogout">退出</a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-layout-header>
        <a-layout-content class="main-content scrollbar">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Layout, Dropdown, Menu, Icon } from 'ant-design-vue';
import { State, Mutation, namespace } from 'vuex-class';

Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);

const global = namespace('global');

@Component
export default class App extends Vue {
  currentPath = '';

  @global.State user;
  @global.State collapsed;

  @global.Mutation toggleMenu;

  @global.Mutation logout;

  handleLogout() {
    this.logout();
    this.$router.push({
      name: 'login',
      query: {
        redirectUrl: this.$route.path
      }
    });
  }

  changeMenu({ item, key, keyPath }) {
    this.$router.push(key);
  }

  @Watch('$route')
  routeChange(val, oldVal) {
    this.currentPath = val.path;
  }
}

</script>

<style lang="scss">
@import '@/styles/layout.scss';
</style>
