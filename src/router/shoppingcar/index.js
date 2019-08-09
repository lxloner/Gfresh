
export default{
    path:"/shoppingcar",
    component:()=>import("../../views/shoppingcar"),

    name:"shoppingcar",
    meta:{
        isAuthorization:true,
        tabflag:false
    }
}