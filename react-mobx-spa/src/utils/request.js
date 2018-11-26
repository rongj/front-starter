import qs from 'qs';
import axios from 'axios';

import appStore from '../stores/appStore';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest'
}

axios.interceptors.response.use(res=> {
	// 未登录权限控制
	if(res.data.code === 1002) {
		appStore.history.replace({
			pathname: '/login',
			search: 'redirect='+appStore.history.location.pathname
		})
	}
	return Promise.resolve(res);
})

export {
	axios
}