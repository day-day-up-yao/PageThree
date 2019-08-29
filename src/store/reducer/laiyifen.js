import {handleActions} from "redux-actions";
const defaultState = {
    cityName:"北京",
    InputVal:"粽子",
    goodslist:[],
    flag:false,
    Inputlisttab:[],
    InputlistBot:[],
    Selectname:"综合"

}

export default handleActions({
    CITY_ACTION:(state,action)=>{
        let cityState = Object.assign({},state);
        cityState.cityName = action.payload;
        // console.log(cityState.cityName);
        return cityState;
    },
    SEARCHACTION:(state,action)=>{
        // console.log(action)
        let searchState = Object.assign({},state);
        searchState.InputVal = action.payload.val;
        searchState.goodslist = action.payload.data.data;
        return searchState;
    },
    SEARCH_OYHER:(state,action)=>{
        let searchothState = Object.assign({},state);
        searchothState.flag=!searchothState.flag;
        return searchothState
    },
    SEARCT_INPUT:(state,action)=>{
        // console.log(action)
        let InputState = Object.assign({},state);
        InputState.Inputlisttab = action.payload.data.data.sortByList;
        InputState.InputlistBot = action.payload.data.data.productList;
        return InputState
    },
    SECHINP_ACTION:(state,action)=>{
        let ToinpState = Object.assign({},state);
        ToinpState.InputlistBot = action.payload.data.data.productList;
        return ToinpState
    },
    SEARCH_SELECTACTION:(state,action)=>{
        console.log(action)
        let seleState = Object.assign({},state);
        seleState.Inputlisttab = action.payload.data.data.sortByList;
        seleState.InputlistBot = action.payload.data.data.productList;
        seleState.Selectname = action.payload.name;
        seleState.flag =  !seleState.flag
        return seleState
    }
},defaultState)