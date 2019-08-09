import http from "utils/http.js"

export const noticeNav =(pageNum=1,showNum=10)=>http("get","api/product/news/queryNewsList",{pageNum,showNum})