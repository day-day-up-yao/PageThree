import React, { Component,Fragment } from 'react'
import TabBtn from "../component/tarBtn"
export default class Layout extends Component {
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                {this.props.children}
               <TabBtn/>
            </Fragment>
        )
    }
}
