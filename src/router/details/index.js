export default{
    path:"/detailsroute/id=:id/cityId=:cityId",
    component:()=>import("components/details"),
    name:"detailsroute",
    meta:{
        tabflag:false
    },
    props:true
}