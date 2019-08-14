import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message : '<Nothing yet>'

  },
  mutations: {
    increment (state,message) 
    {
      state.message = message;
    }
  },
  actions: {
    messageReceived ({ commit }, message) {
      commit('increment', message );
    }
  }
})
