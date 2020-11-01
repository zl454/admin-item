import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aside: {
      opend: true
    }
  },
  mutations: {

  },
  getters: {
    isOpened(state) {
      state.opend = !state.opend
    }
  },
  actions: {
  },
  modules: {
  }
})
