import http from "utils/http.js"
 export const deatilsNav = (level=3,categoryId='',type=1,pageNumber=1,pageSize=10,cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4")=>http("get","/api/product/product/listWarehouseWithSearch",{level,categoryId,type,pageNumber,pageSize,cityId});


