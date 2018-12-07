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
          :defaultSelectedKeys="['1']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="main-layout">
        <a-layout-header class="main-header clearfix">
          <div class="main-header-left">                    
            <a-icon
              class="header-trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </div>
          <div class="main-header-right">
            <a-dropdown>
              <a class="ant-dropdown-link" href="#">
                {{ user.username }} <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>退出</a-menu-item>
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

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';
import { Layout, Dropdown, Menu, Icon } from 'ant-design-vue';
import { State } from 'vuex-class';

Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);

@Component
export default class App extends Vue {
  @State private user;

  @Model('collapsed', { type: Boolean }) collapsed: boolean = false;
}

</script>

<style lang="scss">
@import '@/styles/layout.scss';
</style>
