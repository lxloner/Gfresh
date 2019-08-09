import http from "utils/http.js"

export const sorttitle =()=>http("get","/api/product/product/queryAllCategory")