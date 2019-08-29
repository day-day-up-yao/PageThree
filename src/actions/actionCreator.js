import {createAction} from "redux-actions"
// import {Searchkey} from "../api/search"
import http from "../utils/http"
export const CityAction = createAction("CITY_ACTION",(val)=>val);
export const SearchAction = createAction("SEARCHACTION",(val)=>val)

export const SearchAsyncAction = (val)=>{
    return async (dispatch)=>{
        const Searchkey = (ut="",platform=2,companyId=30,platformId=3,keyword=val,times=1566877746399)=>http.get("/api/search/auto",{ut,platform,companyId,platformId,keyword,times})
        let data = await Searchkey();
        dispatch(SearchAction({val,data}))
        // console.log(data)
    }
}

export const Seathother = createAction("SEARCH_OYHER")

//搜索
export const SearchInputAction = createAction("SEARCT_INPUT",(val)=>val)

export const SearchAsyncInputAction = (val)=>{
    return async (dispatch)=>{
    const SearchTose = (ut='',platform=2,companyId=30,platformId=3,merchantId='',sysType='',shoppingGuideJson="%7B%22attributeJson%22%3A%5B%5D%7D",brandIds='',promotionIds='',coverProvinceIds='',sortType=10,filterType='',priceRange='',pageNo=1,pageSize=20,keyword=val,areaCode=310101,navCategoryIds='',times=1566889799097)=>http.get("/api/search/searchList",{ut,platform,companyId,platformId,merchantId,sysType,shoppingGuideJson,brandIds,promotionIds,coverProvinceIds,sortType,filterType,priceRange,pageNo,pageSize,keyword,areaCode,navCategoryIds,times}) 
    let data = await SearchTose();
    dispatch(SearchInputAction({val,data}))
    }
}

//下拉搜索
export const SechInpAction = createAction("SECHINP_ACTION",(val)=>val)

export const SechInpAsyncAction = (val)=>{
    return async (dispatch)=>{
        const SearchTose = (ut='',platform=2,companyId=30,platformId=3,merchantId='',sysType='',shoppingGuideJson="%7B%22attributeJson%22%3A%5B%5D%7D",brandIds='',promotionIds='',coverProvinceIds='',sortType=10,filterType='',priceRange='',pageNo=1,pageSize=20,keyword=val,areaCode=310101,navCategoryIds='',times=1566889799097)=>http.get("/api/search/searchList",{ut,platform,companyId,platformId,merchantId,sysType,shoppingGuideJson,brandIds,promotionIds,coverProvinceIds,sortType,filterType,priceRange,pageNo,pageSize,keyword,areaCode,navCategoryIds,times}) 
        let data = await SearchTose();
        // console.log(data)
        dispatch(SechInpAction({val,data}))
        }
}

//排序来
export const SearchSelectBtn = createAction("SEARCH_SELECTACTION",(val)=>val)

export const SearchAsynecSelectBtn = (val,type,name)=>{
    return async (dispatch)=>{
        const SearchTose = (ut='',platform=2,companyId=30,platformId=3,merchantId='',sysType='',shoppingGuideJson="%7B%22attributeJson%22%3A%5B%5D%7D",brandIds='',promotionIds='',coverProvinceIds='',sortType=type,filterType='',priceRange='',pageNo=1,pageSize=20,keyword=val,areaCode=310101,navCategoryIds='',times=1566889799097)=>http.get("/api/search/searchList",{ut,platform,companyId,platformId,merchantId,sysType,shoppingGuideJson,brandIds,promotionIds,coverProvinceIds,sortType,filterType,priceRange,pageNo,pageSize,keyword,areaCode,navCategoryIds,times}) 
        let data = await SearchTose();
        // console.log(data)
        dispatch(SearchSelectBtn({val,type,name,data}))
        
    }
}
//购物车
export const ShopyesAction = createAction("SHOPYES_ACTION",(val)=>val)
export const SeleAllAction = createAction("SELEALL_ACTION",(val)=>val)

export const ToAction = createAction("TO_ACTION",(val)=>val)
export const ToAsyncAction = ()=>{
    return async (dispatch)=>{
        const Toshopapi = (ut='',sessionId=1566617471611313,platformId=3,areaCode=310101,receiverId='',v=1.2)=>http.get("/api/cart/list",{ut,sessionId,platformId,areaCode,areaCode,receiverId})
        let data = await Toshopapi();
        // console.log(data)
        dispatch(ToAction(data))
    }
}

export const subAction = createAction("SUB_ACTION",(val)=>val)
export const addAction = createAction("ADD_ACTION",(val)=>val)
export const RadioAction = createAction("RADIO_ACTION",(val)=>val)
export const DeleAction = createAction("DELE_ACTION",(val)=>val)
