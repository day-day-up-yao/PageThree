import React, { Component } from 'react'
import {Shopstyle} from "./styled"
import {Shopapi} from "../../api/shopcar"
import {connect} from "react-redux"
import {ToAsyncAction} from "../../actions/actionCreator"
class Bton extends Component {
    constructor(){
        super()
        this.state={
            shoplist:[]
        }
    }
    render() {
        let {shoplist} = this.state
        // console.log(shoplist)
        return (
            <Shopstyle>
                <div className="btn_top">
                    <p>
                        <b></b>
                        <span>
                            猜你喜欢
                        </span>
                    </p>
                </div>
                <div className="Oth_Btn">
                        <ul>
                            {
                               shoplist.map((item,index)=>(
                                <li key={index}>
                                <div className="Othimg">
                                    <img src={item.srcImgUrl} alt=""/>
                                </div>
                                <p>
                                    <span>{item.mpName}</span>
                                </p>
                                <div className="Othspn">
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
                                    <i className="iconfont icon-gouwuche" onClick={this.props.haddleToshop.bind(this)}></i>
                                </div>
                            </li>  
                               )) 
                            }
                                    
                        </ul>
                    </div>
            </Shopstyle>
        )
    }
   async componentDidMount(){
        let data = await Shopapi()
        // console.log(data.data.dataList)
        this.setState({
            shoplist:data.data.dataList
        })
    }
haddleToshop(){
    console.log(11)
}
}

const mapStateProps = (state)=>({
   
})
const mapDispatchProps = (dispatch)=>({
    haddleToshop(){
        dispatch(ToAsyncAction())
    }
})

export default connect(mapStateProps,mapDispatchProps)(Bton)