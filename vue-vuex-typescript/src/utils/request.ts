import qs from 'qs';
import axios from 'axios';

import router from '../router';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

axios.interceptors.response.use(res => {
  // 未登录权限控制
  if(res.data.code === 1002) {
    router.push({
      name: 'login',
      query: {
        redirectUrl: window.location.hash.replace('#', '')
      }
    });
  }
  return Promise.resolve(res);
});

export {
  axios
};
