import http from "../utils/http.js";
export const getEffectiveBookList = () => http("get","/api/regular/book/getEffectiveBookList")