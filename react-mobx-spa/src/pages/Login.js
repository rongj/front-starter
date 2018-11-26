import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../styles/passport.scss';

import * as _ from '../utils/tool';

import { Button, Input } from 'antd';

@inject('loginStore', 'appStore')
@observer
export default class extends Component {

	// 表单修改
	handleChange = (type, e) => this.props.loginStore.setLoginForm(type,  e.target.value);

	// 提交
	handSubmit = () => this.props.loginStore.handSubmitLogin().then(d => {
		if(d) {
			this.props.history.replace(_.getQueryString('redirect') || '/')
			this.props.appStore.updateUser(d);
		}
	});

	render() {

		let { loginStore } = this.props;
		let { loginForm, ableSubmit } = loginStore;
		
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
					onClick={this.handSubmit}
					loading={!ableSubmit}
					type="primary"
					size="large">登录</Button>
			</div>
		)
	}
}