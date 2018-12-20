export default {
  namespaced: true,
  state: {
    user: null,
  },
  actions: {
    handleLogout({ state, commit }) {
      commit('logout');
      let redirectUrl = this.$router.history.current.path;
      const redirectLoginPaths = ['/about'];
      if(redirectLoginPaths.indexOf(redirectUrl) > -1) {
        this.$router.push('/login?redirectUrl=' + redirectUrl);
      }
    },
  },
  getters: {
    isAuthenticated (state) {
      return !!state.user
    },
    loggedUser (state) {
      return state.user
    }
  },
  mutations: {
    // update user
    updateUser(state, data) {
      state.user = data || null;
    },

    // logout
    logout(state) {
      state.user = null;
    },

    // sync store
    syncStore(state, data) {
      this.replaceState(data);
    }
  }
}