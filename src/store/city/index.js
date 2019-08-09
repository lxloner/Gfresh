const state = {
    cityName:"北京",
    cityId:"9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92"
}

const actions = {

}

const mutations = {
    haddleBtnMutations(state,params){
        // console.log(params,222)
        state.cityName = params.name;
        state.cityId = params.id;
        }
}



export default{
    state,
    actions,
    mutations,
    namespaced:true
   
}