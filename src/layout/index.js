import React, { Component,Fragment } from 'react'
import TabBtn from "../component/tarBtn"
export default class Layout extends Component {
    render() {
        // console.log(this.props.meta)
        return (
            <Fragment>
                {this.props.children}
                {this.props.meta.flag==true?<TabBtn/>:''}
            </Fragment>
        )
    }
}
