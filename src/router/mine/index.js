export default{
    path:"/mine",
    component:()=>import("../../views/mine"),
    name:"mine",
    meta:{
        tabflag:true,
        isAuthorization:true
    }
}