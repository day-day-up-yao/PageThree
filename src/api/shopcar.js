import http from "../utils/http"


export const Shopapi = (sceneNo=2,ut='',mpIds='',pageSize=20,pageNo=1,platformId=3,areaCode=310101)=>http.get("/api/read/product/recommendProductList",{sceneNo,ut,mpIds,pageSize,pageNo,platformId,areaCode})