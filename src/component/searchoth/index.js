import React, { Component } from 'react'
import {Searchothstyle} from "./styled"
import {connect} from "react-redux"
import {Seathother,SearchAsynecSelectBtn} from "../../actions/actionCreator"
import Heard from "../search/heard"
class Searchoth extends Component {
    constructor(){
        super()
    }
    render() {
        let {flag,InputVal,Inputlisttab,InputlistBot,Selectname} = this.props;
        // console.log(Inputlisttab)
        return (
            <Searchothstyle>
                <Heard/>
                    <div className="Oth_C">
                        <p>
                            <span onClick={this.props.haddleOth.bind(this)}>{Selectname}</span>
                            <b className="iconfont icon-iconfontjiantou"></b>
                        </p>
                        <p>销量优先</p>
                        <p>
                            <b>筛选</b>
                            <b className="iconfont "></b>
                        </p>
                        <p className="iconfont icon-leimupinleifenleileibie--"></p>
                        <div className="Con_l" style={{display:flag?'block':'none'}}>

                            {
                               Inputlisttab.map((item,index)=>(
                                <p key={index} onClick={this.props.haddleBtn.bind(this,InputVal,item.sortTypeCode,item.sortTypeDesc)}>{item.sortTypeDesc}</p>
                               )) 
                            }
                        </div>
                    </div>
                    <div className="Oth_Btn">
                        <ul>
                            {
                                InputlistBot.map((item,index)=>(
                                    <li key={index}>
                                    <div className="Othimg">
                                        <img src={item.picUrl} alt=""/>
                                    </div>
                                    <p>
                                        <b>自营</b>
                                        <span>{item.name}</span>
                                    </p>
                                    <div className="Othspn">
                                        {/* {
                                            item.promotionInfo[0].promotions.map((inlist,idx)=>(
                                                <span key={idx}>{inlist.iconText}</span>
                                            ))
                                        } */}
                                        <span>满赠</span>
                                        <span>换购</span>
                                    </div>
                                    <div className="othprice">
                                        <span>￥{item.price}</span>
                                    </div>
                                    <div className="othtitle">
                                        <b>{item.commentInfo.commentNum}</b>
                                        <span>条评论 好评</span>
                                        <strong>{item.commentInfo.goodRate}%</strong>
                                        <i className="iconfont icon-gouwuche"></i>
                                    </div>
                                </li>   
                                ))
                            }
                           
                        </ul>
                    </div>
            </Searchothstyle>
        )
    }   
}
const mapStateProps = (state)=>({
    flag:state.laiyifen.flag,
    InputVal:state.laiyifen.InputVal,
    Inputlisttab:state.laiyifen.Inputlisttab,
    InputlistBot:state.laiyifen.InputlistBot,
    Selectname:state.laiyifen.Selectname
})
const mapDipathProps = (dispatch)=>({
    haddleOth(){
        dispatch(Seathother())
    },
    haddleBtn(val,type,name){
        // console.log(val,type,name)
        dispatch(SearchAsynecSelectBtn(val,type,name))
    }
})

export default connect(mapStateProps,mapDipathProps)(Searchoth)
