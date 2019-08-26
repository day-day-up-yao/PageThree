import http from "../utils/http";
export const HomeNav = (platform=2,pageCode='H5_HOME',adCode='ad_channel%2Cfloat_tail',companyId=30,areaCode=310101,platformId=3)=>http.get("/api/dolphin/list",{platform,pageCode,adCode,companyId,areaCode,platformId});
export const HomeProd = (moduleId=1024102300000071,categoryId=-1,pageNo=1,pageSize=100,platformId=3)=>http.get("cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId})


/* http://m.laiyifen.com/cms/page/module/getModuleData?moduleId=1024102300000071&
categoryId=-1&pageNo=1&pageSize=100&platformId=3 */
