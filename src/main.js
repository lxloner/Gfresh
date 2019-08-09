import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import "./common/index"
import VueTouch from "vue-touch"
// import "../api/mongoose"
// console.log(111)
import "../api/controller/user"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Swipe, SwipeItem } from 'vant';
import axios from "axios"
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(Swipe).use(SwipeItem);

Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
//判断是否登陆
router.beforeEach((to,from,next)=>{
  if(to.meta.isAuthorization){
    if(sessionStorage.token){
      next();
    }else{
      next({
        path:"/login/loging",
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
