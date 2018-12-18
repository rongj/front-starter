export default {
  namespaced: true,
  state: {
    user: {},
  },
  actions: {

  },
  mutations: {
    // update user
    updateUser(state, data) {
      state.user = data;
    },

    // logout
    logout(state) {
      state.user = {};
    }
  }
}