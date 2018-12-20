export default {
  namespaced: true,
  state: {
    count: 0,
  },
  actions: {
    // increase
    increament({ state, commit }) {
      // dosomething
      commit('changeCount', 'increase');
    },

    // decrease
    decreament({ state, commit }) {
      // dosomething
      commit('changeCount', 'decrease');
    },
  },
  mutations: {
    // change count
    changeCount(state, type) {
      type === 'increase' ? state.count++ : state.count--;
    },
  }
}