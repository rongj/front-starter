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
import { Component, Vue } from 'vue-property-decorator';
import { Button, Input } from 'ant-design-vue';
import { State, Action, namespace } from 'vuex-class';

const login = namespace('login');

@Component({
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  }
})
export default class Login extends Vue {
  @login.State loginForm;
  @login.State ableSubmit;

  @login.Action handleLogin;
}

</script>

<style lang="scss">
@import '@/styles/passport.scss';
</style>