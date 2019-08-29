import React, { Component } from 'react'
import {Bscrollstyle} from "./styled"
import Bscroll from "better-scroll"
export default class BscrollComponent extends Component {
    render() {
        return (
            <Bscrollstyle ref="wrapper">
                {this.props.children}
            </Bscrollstyle>
        )
    }
    componentDidMount(){
        this.scroll = new Bscroll(this.refs.wrapper,{
            click:true,
            tap:true
        })
    }
}
