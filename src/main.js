import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueTouch from 'vue-touch'
import axios from "axios"
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
