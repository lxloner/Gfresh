import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


import Homepage from "./homepage"
import City from './city'
import Details from './details'
import Shopcar from "./shopingcar"

const state ={
    
}

export default new Vuex.Store({
    state,
    modules:{
        Homepage,
        City,
        Details,
        Shopcar
       
        
    }
})