import React, { Component } from 'react'
import {Searchstyled} from "./styled"
import {connect} from "react-redux"
import {Seathother,SearchAsyncAction,SearchAsyncInputAction} from "../../actions/actionCreator"
import {withRouter} from "react-router-dom"; 
class Heard extends Component {
    render() {
        let {Inputval} = this.props
        return (
            <Searchstyled>
                <div className="S_top">
                        <p className="iconp">
                            <span className="iconfont icon-jiantou" onClick={this.props.haddleBack.bind(this)}></span>
                        </p>
                            <p className="head_p">
                                <span className="iconfont icon-41" id="herd_p1"></span>
                            <input type="text" value={Inputval} onChange={this.props.haddleVal.bind(this)}/>
                            </p>
                        <p className="herd_sp">
                            <span onClick={this.props.haddleSearch.bind(this,Inputval)}>搜索</span>
                        </p>
                    </div>
            </Searchstyled>
        )
    }
}

const mapStateProps = (state)=>({
    Inputval:state.laiyifen.InputVal,
})
const mapDispatchProps = (dispatch)=>({
    haddleVal(e){
        let value = e.target.value;
        dispatch(SearchAsyncAction(value))
    },
    haddleBack(){
        // console.log(this.props)
        this.props.history.goBack()
    },
    haddleSearch(val){
        // console.log(val)
        dispatch(SearchAsyncInputAction(val))
        this.props.history.push("/searchoth")
    }
})
export default withRouter(connect(mapStateProps,mapDispatchProps)(Heard))
