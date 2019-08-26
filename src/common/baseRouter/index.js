import React, { Component } from 'react'
import Layout from "../../layout/index"
import {Route} from "react-router-dom"
class BaseRoute extends Component {
    render() {
        let {component,path,...rest} = this.props
        return (
            <div>
               <Layout {...rest}>
                   <Route path={path} component={component}/>
               </Layout> 
            </div>
        )
    }
}

export default BaseRoute;