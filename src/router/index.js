import Vue from 'vue'
import Router from 'vue-router'
import Search from './search/index.js'
// import Search from "../components/search"
import Home from "../views/home"
import Classfition from "./classfition"
import Booking from "./booking"
import Shoppingcar from "./shoppingcar"
import Mine from "./mine"
import Deposit from "./deposit"
import Goodstitle from "./goodstitle"
import Details from './details'
import Reserve from './reserve'
import Login from './login'
import Record from './record'
import City from './city'
import whiteBar from './whiteBar'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: Home,
            name: "home",
            props:true
        },
        {
            path: "/home",
            component: Home,
            name: "home",
            props:true
        },
        Search,
        Classfition,
        Booking,
        Shoppingcar,
        Mine,
        Goodstitle,
        Details,
        Reserve,
        Login,
        City,
        whiteBar,
        Deposit,
        Record
    ]

})
