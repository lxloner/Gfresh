const state = {
   num:1,
   
}

const actions = {

}

const mutations = {
    haddleSubMut(state,params){
        if(state.num > 1){
            state.num--;
        }
      
    },
    haddleaddMut(state,params){
        state.num++;
    }
}



export default{
    state,
    actions,
    mutations,
    namespaced:true
   
}