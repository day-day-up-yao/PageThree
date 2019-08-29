import React, { Component } from 'react'
import {Shopstyle} from "./styled"
import Bton from "./botn"
import {withRouter} from "react-router-dom"
class Shopingcar extends Component {
    render() {
        return (
            <Shopstyle>
                <div className="shop_t">
                    <span className="iconfont icon-jiantou" onClick={this.haddleBack.bind(this)}></span>
                    <p>购物车</p>
                    <p></p>
                </div>
                <div className="shopNo">
                   <div className="shopNo_C">
                        <div className="shop_cer">
                            <div className="shopimg">
                                <img src="https://mstatic.laiyifen.com/images/cart-empty.png?v=${vertsion}" alt=""/>
                            </div>
                            <span>购物车没有东西哦！快去shopping吧～</span>
                            <div className="shopgoods" onClick={this.handleTogoods.bind(this)}>选购商品</div>
                        </div>
                    </div> 
                </div>
                <Bton/>
            </Shopstyle>
        )
    }
    handleTogoods(){
        // console.log(this.props)
        this.props.history.push("/home")
    }
    haddleBack(){
        this.props.history.goBack()
    }
}

export default withRouter((Shopingcar))
