import React, { Component } from 'react'
import {Shopyesstyle} from "./styled"
import Bton from "../botn.js"
import {connect} from "react-redux"
import {ShopyesAction,SeleAllAction,subAction,addAction,RadioAction,DeleAction} from "../../../actions/actionCreator"
import {withRouter} from "react-router-dom"
 class Shopyes extends Component {
     constructor(){
         super()
        //  this.state={
        //      Num:'1'
        //  }
     }
    render() {
       
        let {flag,SelelAll,carlist,goodsNum,goodsPrice} = this.props;
        // console.log(goodsPrice)
        for(var i=0;i<carlist.length;i++){
            if(carlist[i].gift){
                goodsNum += carlist[i].checked;
                goodsPrice +=(carlist[i].price*100*carlist[i].checked)/100;
                // goodsPrice = goodsPrice.toFixed(1) 
                }
            }
        return (
            <Shopyesstyle>
                 <div className="shop_t">
                    <span className="iconfont icon-jiantou" onClick={this.props.handleToBack.bind(this)}></span>
                    <p>购物车</p>
                    <p onClick={this.props.handlesee.bind(this)}>{flag?"编辑":'完成'}</p>
                </div>
                <div className="shopy_c">
                    <div className="sh_C_t">
                        <p>
                            <input type="checkbox"  checked={SelelAll} onChange={this.props.handleAll.bind(this)}/>
                            <span>来伊份</span>
                        </p>
                        <p className="T_p">
                            <span>换购</span>
                            <i>满49.00元可换购商品</i>
                            <b>查看换购</b>
                        </p>
                        {
                            carlist.map((item,index)=>(
                            <div className="carlist" key={index}>
                                <div className="list_con">
                                    <input type="checkbox" checked={item.gift}  onChange={this.props.haddleInpradio.bind(this,index)}/>
                                    <p>
                                        <img src={item.picUrl} alt=""/>
                                    </p>
                                    <div className="Con_text">
                                       <i>{item.name}</i>
                                    <span>￥{item.price}</span>
                                    </div>
                                    <div className="Con_L">
                                        <b onClick={this.props.handlesub.bind(this,index)}>-</b>
                                        <span>{item.checked}</span>
                                        <b onClick={this.props.handleadd.bind(this,index)}>+</b>
                                    </div>
                                </div>
                            </div>
    
                            ))
                        }
                        
                    </div>
                </div>



                <div className="bottom_B" style={{ opacity:flag==true?'1':'0'}}>
                    <span>
                        <input type="checkbox"  checked={SelelAll}  onChange={this.props.handleAll.bind(this)}/>
                        <b>全选</b>
                    </span>
                    <div className="Btn_price">
                        <div className="b_span">
                            <p>
                                <span>合计</span>
                                <span>￥{goodsPrice}</span>
                            </p>
                            <p>
                                <span>已优惠</span>
                                <span>￥0.00</span>
                                <span>不含运费</span>
                            </p>
                        </div>
                        <div className="B_R">
                            去结算<span>({goodsNum})</span>
                        </div>
                    </div>
                </div>




                <div className="bottom_BS" style={{ opacity:flag==true?'0':'1'}}>
                    <span>
                        <input type="checkbox"  onChange={this.props.handleAll.bind(this)}/>
                        <b>全选</b>
                    </span>
                    <div className="Btn_price">
                    <div className="B_R">
                           <span>移入收藏夹</span>
                        </div>
                        <div className="b_spans">
                           <span onClick={this.props.handleDele.bind(this)}>删除</span>
                        </div>
                    </div>
                </div>
                <Bton/>
            </Shopyesstyle>
        )
    }
    
}


const mapStateProps = (state)=>({
    flag:state.shopcar.flag,
    SelelAll:state.shopcar.SelelAll,
    carlist:state.shopcar.carlist,
    goodsNum:state.shopcar.goodsNum,
    goodsPrice:state.shopcar.goodsPrice

})
const mapDispatchProps = (dispatch)=>({
    handlesee(){
       dispatch(ShopyesAction())
    },
    handleAll(){
        dispatch(SeleAllAction())
    },
    handlesub(index){
        dispatch(subAction(index))
    },
    handleadd(index){
        dispatch(addAction(index))
    },
    haddleInpradio(index){
        dispatch(RadioAction(index))
    },
    handleDele(){
        dispatch(DeleAction())
    },
    handleToBack(){
        // console.log(this.props)
        this.props.history.goBack()
    }
})

export default withRouter(connect(mapStateProps,mapDispatchProps)(Shopyes))