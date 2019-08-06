export default {
    path:"/reserve",
    component:()=>import("views/reserve"),
    name:"reserve",
    children:[
        {
            path:"reservation",
            component:()=>import("components/reservation"),
            name:"reservation",

        }
    ]
}