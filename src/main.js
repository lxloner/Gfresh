import Vue from 'vue'
import App from './App.vue'
import Vuetouch from 'vue-touch'
import router from './router/index.js'
import store from './store/index.js'
import "./common/index"

import axios from "axios"
Vue.prototype.$axios = axios
Vue.use(Vuetouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
