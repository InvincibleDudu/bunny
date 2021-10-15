import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    count: 0,
    user: {
      name: 'invdu',
      id: '0',
      type: '0'
    },
    nav: true
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
})
