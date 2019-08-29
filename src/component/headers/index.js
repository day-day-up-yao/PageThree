import React, { Component } from 'react'
import {Herderstyled} from "./styled"
import {NavLink} from "react-router-dom"
 import {connect} from "react-redux"
class Header extends Component {
    constructor(){
        super()
    }
    render() {
        let {cityName} = this.props;
        // console.log(cityName)
        return (
            <Herderstyled>
                    <NavLink to="/city">
                        <span className="cityNames">{cityName}</span>
                        <span className="iconfont icon-jiantou1"></span>
                    </NavLink>
                    <NavLink to="/search">
                        <p className="head_p">
                            <span className="iconfont icon-41" id="herd_p1"></span>
                            <span></span>
                        </p>
                    </NavLink>
                    <p className="herd_sp">
                        <span className="iconfont icon-xiaoxi1"></span>
                    </p>
            </Herderstyled>
        )
    }
    
}
const mapStateProps= (state)=>({
    cityName:state.laiyifen.cityName
})
const mapDispatchProps= (dispatch)=>({

})

export default  connect(mapStateProps,mapDispatchProps)(Header)