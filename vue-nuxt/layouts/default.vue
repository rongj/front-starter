<template>
  <el-container>
    <el-header>
      <el-menu 
        :default-active="$route.path" 
        :router="true" 
        class="main-menu" 
        mode="horizontal">
        <el-menu-item index="/">index</el-menu-item>
        <el-menu-item index="/list">list</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
      </el-menu>
      <div class="header-login">
        <div v-if="loggedUser">
          welcome, {{ loggedUser && loggedUser.username }}!
          <el-button style="margin-left: 10px;" @click="handleLogout">logout</el-button>
        </div>
        <div v-else>
          <nuxt-link to="/login">
            <el-button>login</el-button>
          </nuxt-link>
        </div>
      </div>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("global", ["user"]),

    ...mapGetters("global", ["loggedUser"])
  },

  methods: {
    ...mapActions("global", ["handleLogout"])
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_theme.scss";
.main-menu {
  position: relative;
}

.header-login {
  position: absolute;
  right: 20px;
  top: 0;
  line-height: 60px;
  font-size: 14px;
  color: $theme-color;
}
</style>