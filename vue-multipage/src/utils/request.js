import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

export {
  axios
};
