import http from "../utils/http";
export const HomeNav = (platform=2,pageCode='H5_HOME',adCode='ad_channel%2Cfloat_tail',companyId=30,areaCode=310101,platformId=3)=>http.get("/api/dolphin/list",{platform,pageCode,adCode,companyId,areaCode,platformId});
export const HomeProd = (moduleId=1024102300000071,categoryId=-1,pageNo=1,pageSize=100,platformId=3)=>http.get("cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId});
export const HomeProdOne = (moduleId=1003102300000100,categoryId=-1,pageNo=1,pageSize=100,platformId=3)=>http.get("/cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId})
export const HomeProdTwo = (moduleId=1024102300000084,categoryId=-1,pageNo=1,pageSize=100,platformId=3)=>http.get("/cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId})
export const HomeProdThree = (moduleId=1024102400000056,categoryId=-1,pageNo=1,pageSize=100,platformId=3)=>http.get("/cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId})

export const HomeTabtop = (moduleId=1003056301000120,platformId=3)=>http.get("/cms/page/module/getModuleDataCategory",{moduleId,platformId})
export const HomeTabBom = (moduleId=1003056301000120,categoryId=-1,pageNo=1,pageSize=530,platformId=3)=>http.get("/cms/page/module/getModuleData",{moduleId,categoryId,pageNo,pageSize,platformId})







