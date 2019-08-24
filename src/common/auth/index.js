import React, { Component } from 'react'
import {Redirect} from "react-router-dom" 
export default (PageWrape)=>{
    return class extends Component {
        render() {
            let token = sessionStorage.getItem("token");
            if(!token){
                return <Redirect from="/" to="/login" />
            }
            return <PageWrape {...this.props}/>
        }
    }
}
