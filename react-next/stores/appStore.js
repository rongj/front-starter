import { observable, action } from 'mobx';

class AppStore {
	@observable collapsed = !!window.localStorage.getItem('collapsed');

	// 收起折叠左侧
	@action toggle = () => {
		this.collapsed = !this.collapsed;
	}

	@observable user = JSON.parse(window.localStorage.getItem('token')) || {};

	// 设置登录用户信息
	@action setUser = data => {
		if(data.uid) {
			this.user = data;
			window.localStorage.setItem('token', JSON.stringify(data));
		}
	}

	// 更新登录用户信息
	@action updateUser = data => {
		let d = Object.assign(this.user, data)
		if(d.uid) {
			this.user = d;
			window.localStorage.setItem('token', JSON.stringify(d));
		}
	}

	// 退出登录
	@action logout = () => {
		this.user = {};
		window.localStorage.removeItem('token');
	}

	// 路由信息
	@observable history = null;

	@action setHistory(history) {
		this.history = history;
	}
}

export default new AppStore();