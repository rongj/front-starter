import { observable, action } from 'mobx';
import api from '../services/api';
import appStore from './appStore';

import { message } from 'antd';

class loginStore {
	// 登录表单输入
	@observable loginForm = {
		username: '',
		password: '',
	};

	// 是否可提交
	@observable ableSubmit = true;

	// 表单输入
	@action setLoginForm (type, v) {
		this.loginForm[type] = v;
	}

	// 表单提交
	@action handSubmitLogin = async () => {
		let { username, password } = this.loginForm;
		if(!username || !password) {
			message.error('用户名或密码不能为空')
			return false
		}

		this.ableSubmit = false;

		return api.login({ username, password }).then(res => {
			this.ableSubmit = true;
			if(res.code === 200) {
				return res.data
			}
		}).catch(e => {
			this.ableSubmit = true;
		})
	}
}

export default new loginStore();