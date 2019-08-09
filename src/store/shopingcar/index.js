const state = {
    shoplist:[],
    selectAll: true,
    listflag: true
}

const actions = {

}

const mutations = {
    haddletoshopcarMut(state,params){
        state.shoplist.push(params)
        state.shoplist.map((item)=>{
            item.flag= true,
            item.num = 1
        })
    },
    haddleselscAllMut(state, params) {
        state.selectAll = !state.selectAll;
       state.shoplist.forEach(item => {
           item.flag = state.selectAll
       });
    },
    haddleselecAnyone(state, params) {
        // console.log(params)
        state.shoplist[params].flag = !state.shoplist[params].flag;
        var bStop = true;
       for(var i=0;i<state.shoplist.length;i++){
           if(!state.shoplist[i].flag){
            bStop = false;
            break;
           }
       }
        state.selectAll = bStop;
    },
    haddleStationMut(state,params){
        console.log(111)
        if(state.shoplist[params].product.status>1){
            state.shoplist[params].product.status--
        }
    },
    haddleAddMut(state,params){
        state.shoplist[params].product.status++
    },
    haddleDetelMut(state){
        console.log(111)
        if(state.shoplist.flag){
            state.shoplist.splice(1)
        }
    }
}

const getters = {
    showlistGet(state){
        let showNumber = 0,showPrice = 0;
        for(var i=0;i<state.shoplist.length;i++){
            if(state.shoplist[i].flag){
                showNumber+=state.shoplist[i].product.status;
                showPrice+=state.shoplist[i].product.status*(state.shoplist[i].arrivedList[0].packList[0].skuList[0].quoteUnitPrice[0].price*100)/100
            }
        }
        return {
            showNumber,
            showPrice
        }
    }
}
export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}