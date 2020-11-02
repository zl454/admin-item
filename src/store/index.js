import Vue from 'vue'
import Vuex from 'vuex'

import { routes } from "@/router/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aside: {
      isOpend: false
    },
    routers: routes
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
