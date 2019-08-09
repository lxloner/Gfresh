import http from "../utils/http.js"

export const searchlistapi =(keyWord,type=1,productType=0,flag=1,arrivedDate='',pageNumber=1,pageSize=10,cityId="9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92")=>http("post","/api/product/product/searchKeyWord",{keyWord:keyWord,type:type,productType:productType,flag:flag,arrivedDate:arrivedDate,pageNumber:pageNumber,pageSize:pageSize,cityId:cityId})


// keyWord=%E8%9F%B9&type=1&productType=0&flag=1&arrivedDate=&pageNumber=1&pageSize=10&cityId=9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92