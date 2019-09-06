export default {
  state: {
    list: []
  },

  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item)
    }
  },

  mutations: {
    ADD_ITEM(state, item) {
      state.list.push(item)
    }
  }
}
