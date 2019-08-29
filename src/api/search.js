import http from "../utils/http";
export const Searchdata = (ut='',platform=2,companyId=30,platformId=3,pageCode='H5_HOME',adCode='searchword%2Chotword',areaCode=310101,times=1566871219133)=>http.get("/api/dolphin/list",{ut,platform,companyId,platformId,pageCode,adCode,areaCode,times})

export const Searchkey = (ut="",platform=2,companyId=30,platformId=3,keyword='1',times=1566877746399)=>http.get("/api/search/auto",{ut,platform,companyId,platformId,keyword,times})
export const Searchsel = (ut='',platform=2,companyId=30,platformId=3,merchantId='',sysType='',shoppingGuideJson="%7B%22attributeJson%22%3A%5B%5D%7D",brandIds='',promotionIds='',coverProvinceIds='',sortType=10,filterType='',priceRange='',pageNo=1,pageSize=20,keyword='1%E5%8F%B7%E6%9E%9C%E8%82%89%E5%B0%8F%E5%8C%85',areaCode=310101,navCategoryIds='',times=1566889799097)=>http.get("/api/search/searchList",{ut,platform,companyId,platformId,merchantId,sysType,shoppingGuideJson,brandIds,promotionIds,coverProvinceIds,sortType,filterType,priceRange,pageNo,pageSize,keyword,areaCode,navCategoryIds,times})


