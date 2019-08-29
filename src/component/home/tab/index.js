import React, { Component } from 'react'
import { Tabstyle } from "./styled"
import {HomeTabtop,HomeTabBom} from "../../../api/home"
import {connect} from "react-redux"
import {ToAsyncAction} from "../../../actions/actionCreator"
 class Tab extends Component {
    constructor(){
        super()
        this.state={
            Tablist:[],
            TablistB:[],
            height:""
        }
    }
    render() {
        let {Tablist,TablistB} = this.state;
        // window.addEventListener('scroll', this.scroll);
        // this.scroll =document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
          
        return (
            <Tabstyle >
                <div className="tab_p" >
                    <ul>
                        {
                            Tablist.map((item,index)=>(
                                <li key={index}>
                                    <p>
                                        <img src={item.pictureUrl} alt=""/>
                                    </p>
                                    <span>{item.categoryName}</span>
                                </li>
                            ))
                        }
                       
                    </ul>
                </div>
                <div className="tab_B" ref="tabscroll">
                    <div>
                        {
                            TablistB.map((item,index)=>(
                                <li key={index} onClick={this.props.handleTodetail.bind(this,item.mpId)}>
                                    <p>
                                        <img src={item.picUrl} alt="" />
                                    </p>
                                    <b>{item.mpName}</b>
                                    <span>￥{item.price}0
                                        <i className="iconfont icon-gouwuche" onClick={this.props.handleToshop.bind(this)}></i>
                                    </span>
                                </li>
                            ))
                        }
                        
                    </div>
                </div>
            </Tabstyle>
        )
    }
    async componentDidMount(){
        let tabTop = await HomeTabtop();
        let tabBom = await HomeTabBom();
       
       
        // console.log(tabBom.data.listObj);
        this.setState({
            Tablist:tabTop.data,
            TablistB:tabBom.data.listObj,
        })
        // let height= this.refs.tabscroll.scrollHeight;

    } 
}

const mapStateProps = (state)=>({

})

const mapDispatchProps=(dispatch)=>({
    handleScroll(){
        console.log(111)
    },
    handleToshop(){
        dispatch(ToAsyncAction())
    },
    handleTodetail(mpId){
        console.log(mpId)
    }
})

export default connect(mapStateProps,mapDispatchProps)(Tab)