import http from "../utils/http.js"
export const detailsmMsg = ()=>http("get","/api/regular/book/getEffectiveBookList")