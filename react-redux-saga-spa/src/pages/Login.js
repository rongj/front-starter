import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/passport.scss';

import * as _ from '../utils/tool';

import { Button, Input } from 'antd';

@connect(
  state => ({
    login: state.login
  })
)
export default class extends Component {

  // 表单修改
  handleChange = (type, e) => this.props.dispatch({
    type: 'changeForm',
    payload: {
      [type]: e.target.value
    }
  });

  // 提交
  handleSubmit = () => this.props.dispatch({
    type: 'handleLogin',
    history: this.props.history
  })

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