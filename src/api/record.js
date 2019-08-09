import http from "../utils/http.js"
export const RecordList = ()=>http("post","/api/order/order/findListByProduct")