import http from "../utils/http.js"
export const Citylist = (type=3)=>http("get","/api/product/location/findGroupedByType",{type:type})