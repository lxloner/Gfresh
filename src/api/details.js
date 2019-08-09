import http from "../utils/http.js"
export const detailsmMsg = (id)=>http("get","/api/product/quote/getQuoteByIdCustom",{id:id})
export const detailstitle = (id,cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4")=>http("get","/api/product/product/getProductDetailById",{id:id,cityId:cityId})


export const detailsxinxi = (id,cityId)=>http("get","/api/product/product/getProductDetailById",{id,cityId})
// id=fa43b125-e97d-431c-9fd5-9ef44f6d787a&cityId=9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92
