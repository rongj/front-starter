export default {
  namespaced: true,
  state: {
    user: {},
    collapsed: !!window.localStorage.getItem('collapsed'),
  },
  actions: {

  },
  mutations: {
    // toggle menu state
    toggleMenu(state) {
      state.collapsed = !state.collapsed;
      window.localStorage.setItem('collapsed', '1');
    },

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