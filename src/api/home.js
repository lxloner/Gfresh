import http from "../utils/http.js"

export const homebanner = (pageNum=1,showNum=10)=>http("get","/api/product/banner/queryBannerList",{pageNum:pageNum,showNum:showNum});
export const homenotice = (envi=1)=>http("get","/api/product/categoryNavigation/getMobileFrontList",{envi:envi});
export const homegoodslist = (cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4",abroad=0,pageSize=5)=>http("get","/api/product/product/queryHomeActivityProduct",{cityId,abroad,pageSize});
export const homelike = (pageNumber=1,cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4",abroad=0,pageSize=5)=>http("get","/api/product/product/queryGuessYouLikeProduct",{pageNumber,cityId,abroad,pageSize});
export const homezone = ()=>http("get","/api/product/homeArea/getHomeAreas")
export const homezoneOne =(cateId="b4813f55-fe95-4e4f-af67-8811572eec80,0a21f7fd-e35e-440f-a67f-91cf69aa6074,9299be89-a64e-4b81-bbb5-d094212a2bfb,77720f81-5ba3-449e-8652-d96fc6165bf0,e2a89ace-e9d1-4b42-b80c-a0461dd3b8c6,59e0fa7e-28e9-4876-9a8c-07d6bc733570,2fc442ed-9e5d-4bb9-bff9-804bb933f9b3",showNum=5,showNoQuote=1,cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4",abroad=0)=>http("get","/api/product/product/queryProductByCateIdShowNum",{cateId,showNum,showNoQuote,abroad});
export const goodstitles = (level=3,categoryId='',type=1,pageNumber=1,pageSize=10,cityId="2bf8c60c-789d-433a-91ae-8e4ae3e587a4")=>http("get","/api/product/product/listWarehouseWithSearch",{level,categoryId,type,pageNumber,pageSize,cityId});

export const details = ()=>http("get","/api/product/product/queryProductByCateIdShowNum")

// export const searchlisttitle =(keyWord)=>http("post","/api/product/product/searchKeyWord?keyWord=%E8%9F%B9&type=1&productType=0&flag=1&arrivedDate=&pageNumber=1&pageSize=10&cityId=9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92",{keyWord})
// {keyWord,type,productType,flag,arrivedDate,pageNumber,pageSize,cityId}
// keyWord="a",type=1,productType=0,flag=1,arrivedDate='',pageNumber=1,pageSize=10,cityId="9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92"
// keyWord="%E8%9F%B9",type=1,productType=0,flag=1,arrivedDate='',pageNumber=1,pageSize=10,cityId="9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92"