import { axios } from '../utils/request';

const mock = (data, time = 200) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 200, data, msg: 'success' })
    }, time)
  })
}


export default {
  login: data => mock({ username: data.username, uid: 1, token: 123 }),

  getUsers: () => axios.get('https://jsonplaceholder.typicode.com/users'),

  getList: () => axios.get('https://jsonplaceholder.typicode.com/posts'),

  getDetail: data => axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}`),
};