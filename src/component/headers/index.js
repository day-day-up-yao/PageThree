import React, { Component } from 'react'
import {Herderstyled} from "./styled"
export default class Header extends Component {
    render() {
        return (
            <Herderstyled>
                    <p>
                        <span>上海</span>
                        <span className="iconfont icon-jiantou1"></span>
                    </p>
                    <p className="head_p">
                        <span className="iconfont icon-41" id="herd_p1"></span>
                        <span>搜索</span>
                    </p>
                    <p className="herd_sp">
                        <span className="iconfont icon-xiaoxi1"></span>
                    </p>
            </Herderstyled>
        )
    }
}