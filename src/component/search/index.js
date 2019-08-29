import React, { Component } from 'react'
import {Searchstyled} from "./styled"
import {Searchdata} from "../../api/search"
import {connect} from "react-redux"
import {SearchAsyncAction,SechInpAsyncAction} from "../../actions/actionCreator"
import {NavLink} from "react-router-dom"
import Heard from "./heard"
import {withRouter} from "react-router-dom"
// import {withRouter} from "react-router-dom"; 
class Searchbody extends Component {
    constructor(){
        super()
        this.state = {
            Hotlist:[],
            // Inputval:"粽子"
        }
    }
    render() {
        let {Hotlist} = this.state;
        let {goodslist} = this.props;
        // console.log(goodslist)
        return (
            <Searchstyled>
                    <Heard/>
                    <div className="S_con">
                        <div className="con_hot">热门搜索</div>
                        <p>
                            {
                                Hotlist.map((item,index)=>(
                                    <span onClick={this.props.haddleToInput.bind(this,item.name)} key={index}>
                                    {item.name}
                                    </span>
                                ))
                            } 
                        </p>
                    </div>
                    <div className="S_Btn">
                        {
                           goodslist.map((item,index)=>(
                            <p key={index} onClick={this.props.haddleToInput.bind(this,item.keyword)}>{item.keyword}</p>
                           )) 
                        }
                        
                    </div>
            </Searchstyled>
        )
    }
   async componentDidMount() {
        let hotlist = await Searchdata();
        // console.log(hotlist.data.hotword)
        this.setState({
            Hotlist:hotlist.data.hotword
        })
    }
}
const mapStateProps = (state)=>({
    goodslist:state.laiyifen.goodslist
})
const mapDispatchProps = (dispatch)=>({
    haddleVal(e){
        let value = e.target.value;
        dispatch(SearchAsyncAction(value))
    },
    haddleToInput(kword){
        dispatch(SechInpAsyncAction(kword))
        this.props.history.push("/searchoth")
        // console.log(this.props)
    }
})
export default withRouter(connect(mapStateProps,mapDispatchProps)(Searchbody))
