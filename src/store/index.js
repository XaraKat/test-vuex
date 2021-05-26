import Vue from 'vue'
import Vuex from 'vuex'

// import { mapGetters } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Ttable: []

  },
  mutations: {

    pushToTable(state, value) {
      state.Ttable.push(value)
      
    },

  },
  actions: {
    pushToTable({ commit }, value) {
      commit('pushToTable', value)
    }
  }
  ,
  getters: {
    getTable: state => {
      return state.Ttable;
    }
  },
  modules: {
  }
})



