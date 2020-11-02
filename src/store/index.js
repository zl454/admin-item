import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aside: {
      isOpend: true
    }
  },
  mutations: {
    toggleAsideBtn(state) {
      state.aside.isOpend = !state.aside.isOpend
    }

  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
