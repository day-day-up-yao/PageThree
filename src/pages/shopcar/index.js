import React,{Component} from "react";
import Shopingcar from "../../component/shopcar"
import Shopyes from "../../component/shopcar/shopyes"
import {connect} from "react-redux"
class Shopcar extends Component{
    render(){
        // console.log(this.props)
        let {carlist} = this.props
        return(
            <div>
                {carlist.length==0?<Shopingcar/>:<Shopyes/>}
                
            </div>
        )
    }
}

const mapStateProps = (state)=>({
    carlist:state.shopcar.carlist
})

const mapDispatchProps = (dispatch)=>({
    
})


export default connect(mapStateProps,mapDispatchProps)(Shopcar)