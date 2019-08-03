import Vue from 'vue'
import Router from 'vue-router'
import Reserve from './views/reserve.vue'
import Reservation from './components/reserve/reservation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reserve',
      component: Reserve,
      children:[

      ]
    },
    {
      path:"/reservation",
      name:"reservation",
      component:Reservation
    }
  ]
})
