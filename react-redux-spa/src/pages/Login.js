import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/passport.scss';

import * as _ from '../utils/tool';

import { Button, Input } from 'antd';
import { changeForm, handleLogin } from '../stores/actions/login';
import { updateUser } from '../stores/actions/app';

@connect(
  state => ({
    login: state.login
  }),
  dispatch => ({
    handleChange: data => dispatch(changeForm(data)),
    handleSubmit: data => dispatch(handleLogin(data)),
    handleUpdateUser: data => dispatch(updateUser(data)),
  })
)
export default class extends Component {

  // 表单修改
  handleChange = (type, e) => this.props.handleChange({ [type]: e.target.value});

  // 提交
  handleSubmit = () => this.props.handleSubmit(this.props.login.loginForm).then(d => {
   if(d) {
     this.props.history.replace(_.getQueryString('redirect') || '/')
     this.props.handleUpdateUser(d);
   }
  });

  render() {

    let { login } = this.props;
    let { loginForm, ableSubmit } = login;
    
    return (
      <div className="passport-panel">
        <h3>登录</h3>
        <Input
          size="large"
          value={loginForm.username}
          onChange={this.handleChange.bind(null, 'username')}
          placeholder="请输入用户名"/>
        <Input 
          size="large"
          value={loginForm.password}
          onChange={this.handleChange.bind(null, 'password')}
          type="password"
          placeholder="请输入密码"/>
        <Button 
          onClick={this.handleSubmit}
          loading={!ableSubmit}
          type="primary"
          size="large">登录</Button>
      </div>
    )
  }
}