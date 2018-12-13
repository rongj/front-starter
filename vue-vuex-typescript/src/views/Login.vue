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
      @click="() => handleLogin(loginForm)"
      size="large">登录</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Input } from 'ant-design-vue';
import { State, Action } from 'vuex-class';
import { LoginForm } from '@/stores/state';

@Component({
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  }
})
export default class extends Vue {
  @State private loginForm?: LoginForm;
  @State private ableSubmit!: boolean;

  @Action private handleLogin!: (loginForm: LoginForm) => void;
}

</script>

<style lang="scss">
@import '@/styles/passport.scss';
</style>