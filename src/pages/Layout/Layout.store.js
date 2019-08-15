import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const Layout = {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    CHANGE_ISCOLLAPSE(state, { isCollapse }) {
      typeof (isCollapse) == "boolean" && (state.isCollapse = isCollapse);
    }
  },
  actions: {
    CHANGE_ISCOLLAPSE({ commit }, { isCollapse }) {
      typeof (isCollapse) == "boolean" && commit('CHANGE_ISCOLLAPSE', { isCollapse });
    }
  },
  getters: {}
}

export default Layout
