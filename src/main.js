// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/pages/App/App'
import router from './router'
import store from './vuex/store'
import axios from './http'
import {
  Container, Header, Aside, Main, Footer, Loading, Message, Menu,
  Submenu, MenuItem, MenuItemGroup, Badge
} from 'element-ui'

Vue.use(Loading.directive)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Badge)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
