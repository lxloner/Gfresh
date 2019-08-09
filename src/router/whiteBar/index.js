export default {
    path:"/whitebar",
    component : ()=>import("views/whiteBar"),
    name:"whiteBar",
    meta:{
        tabflag:false,
        isAuthorization:false
    }
}