import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


import Homepage from "./homepage"

export default new Vuex.Store({
    modules:{
        Homepage
    }
})