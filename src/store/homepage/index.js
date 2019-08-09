const state = {
    obj:"11"
    
 }
 
 const actions = {
 
 }
 
 const mutations = {
    haddleBanMut(state,params){
        console.log(params);
        var str = params;
        var arr = [];
        arr = str.split("?");
        str = arr[1];
        arr = str.split("&");
        arr.pop();
        arr = arr[1].split("=")
        // console.log(arr[1])
        state.obj = arr[1];
        console.log(state.obj)
     
    }
 }
 
 export default{
     state,
     actions,
     mutations,
     namespaced:true
    
 }