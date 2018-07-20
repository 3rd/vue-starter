const state = {
  test: true
}

const getters = {
  testGetter: (state) => {
    return `Test is ${state.test}`
  }
}

const actions = {
  toggleTest: ({
    state,
    commit,
    dispatch,
    rootState
  }) => {
    commit('setTest', !state.test)
  }
}

const mutations = {
  setTest: (state, payload) => {
    state.test = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
