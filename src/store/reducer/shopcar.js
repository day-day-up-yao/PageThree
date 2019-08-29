import {handleActions} from "redux-actions";
const defaultState = {
   flag:true,
   SelelAll:false,
   carlist:JSON.parse(sessionStorage.getItem("carlists"))||[],
   goodsNum:0,
   goodsPrice:0,
   indexof:""
}

export default handleActions({
    SHOPYES_ACTION:(state,action)=>{
        let ShopState = Object.assign({},state);
        ShopState.flag = !ShopState.flag;
        return ShopState
    },
    SELEALL_ACTION:(state,action)=>{
        let AllState = Object.assign({},state);
        AllState.SelelAll = !AllState.SelelAll;
        AllState.carlist.forEach(item => {
                item.gift =  AllState.SelelAll
        });
        return AllState
    },
    TO_ACTION:(state,action)=>{
        // console.log(action.payload.data.merchantList[0].productList);
        let ToshopState = Object.assign({},state);
        ToshopState.carlist = action.payload.data.merchantList[0].productList;
        sessionStorage.setItem("carlists",JSON.stringify(action.payload.data.merchantList[0].productList));
       
        return ToshopState
    },
    SUB_ACTION:(state,action)=>{
        let SubnumState = JSON.parse(JSON.stringify(state));
        if(SubnumState.carlist[action.payload].checked>1){
            SubnumState.carlist[action.payload].checked--;
            // for(var i=0;i<SubnumState.carlist.length;i++){
            //     if(SubnumState.carlist[i].flag){
            //         SubnumState.goodsNum = SubnumState.carlist[i].checked;
            //         SubnumState.goodsPrice = SubnumState.carlist[i].checked*(SubnumState.carlist[i].price*10)/10;
            //     }
            // }
        }else{
            SubnumState.carlist[action.payload].checked=1
        }
        return SubnumState
    },
    ADD_ACTION:(state,action)=>{
        let AddnumState = JSON.parse(JSON.stringify(state));
        AddnumState.carlist[action.payload].checked++;
        // for(var i=0;i<AddnumState.carlist.length;i++){
        //     if(AddnumState.carlist[i].flag){
        //         AddnumState.goodsNum = AddnumState.carlist[i].checked;
        //         AddnumState.goodsPrice = AddnumState.carlist[i].checked*(AddnumState.carlist[i].price*10)/10;
        //     }
        // }
        
        // console.log( AddnumState.carlist[action.payload].checked)
        return AddnumState
    },
    RADIO_ACTION:(state,action)=>{
        // console.log(action)
        let RadioState = JSON.parse(JSON.stringify(state));
        RadioState.carlist[action.payload].gift = !RadioState.carlist[action.payload].gift;
        // if(RadioState.carlist[action.payload].flag){
        //     RadioState.goodsNum += RadioState.carlist[action.payload].checked;
        //     RadioState.goodsPrice += RadioState.carlist[action.payload].checked*(RadioState.carlist[action.payload].price*10)/10;
        // }else{
        //     RadioState.goodsNum=0;
        //     RadioState.goodsPrice=0
        // }
       
        RadioState.indexof = action.payload;
        let Bstop = true;
        for(var i=0;i<RadioState.carlist.length;i++){
            if(!RadioState.carlist[i].gift){
                Bstop = false;
                break;
            }
        }
        RadioState.SelelAll = Bstop; 
        
        return RadioState
    },
    DELE_ACTION:(state,action)=>{
        let DeleState = JSON.parse(JSON.stringify(state))
        DeleState.carlist.splice(DeleState.indexof,1);
        console.log(111)
        return DeleState
    }
},defaultState)