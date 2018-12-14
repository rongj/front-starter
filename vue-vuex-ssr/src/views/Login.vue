<template>
  <div class="passport-panel">
    <h3>登录</h3>
    <a-input
      size="large"
      v-model="loginForm.username"
      placeholder="请输入用户名"/>
    <a-input 
      size="large"
      type="password"
      v-model="loginForm.password"
      placeholder="请输入密码"/>
    <a-button 
      type="primary"
      :loading="!ableSubmit"
      @click="() => handleLogin(loginForm)"
      size="large">登录</a-button>
  </div>
</template>

<script>
import { Button, Input } from 'ant-design-vue';

export default {
  components: {
    AButton: Button,
    AInput: Input
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      ableSubmit: true,
    }
  },

  methods: {
    handleLogin: function() {

    }
  }
}

</script>

<style lang="scss">
@import '@/styles/passport.scss';
</style>