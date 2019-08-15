import Vue from 'vue'
import Vuex from 'vuex'
import Layout from '@/pages/Layout/Layout.store'
import Login from '@/pages/Login/Login.store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    Layout,
    Login
  },
  state: {

  },
  mutations: {},
  actions:{}
})

export default store
