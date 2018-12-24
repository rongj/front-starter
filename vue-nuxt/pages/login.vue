<template>
  <div class="login-panel">
    <el-form ref="loginForm" :model="loginForm" status-icon>
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="!ableSubmit" type="primary" @click="handleLogin(loginForm)">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  middleware: "anonymous",

  layout: "single",

  head: {
    title: "login page"
  },

  computed: mapState("login", ["loginForm", "ableSubmit"]),

  methods: mapActions("login", ["handleLogin"])
};
</script>

<style lang="scss" scoped>
.login-panel {
  width: 400px;
  height: 300px;
  padding: 15px 30px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -180px;
  .el-form-item {
    margin-bottom: 10px;
  }
  .el-button {
    width: 100%;
    margin-top: 30px;
  }
}
</style>