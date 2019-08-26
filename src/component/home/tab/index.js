import React, { Component } from 'react'
import { Tabstyle } from "./styled"
export default class Tab extends Component {
    render() {
        return (
            <Tabstyle>
                <div className="tab_p">
                    <ul>
                        <li>
                            <p>推荐</p>
                            <span>推荐</span>
                        </li>
                        <li>
                            <p>推荐</p>
                            <span>推荐</span>
                        </li>
                        <li>
                            <p>推荐</p>
                            <span>推荐</span>
                        </li>
                    </ul>
                </div>
                <div className="tab_B">
                    <ul>
                        <li>
                            <p>
                                <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt="" />
                            </p>
                            <b>天天坚果（活力派）25g</b>
                            <span>￥22.80</span>
                        </li>
                        <li>
                            <p>
                                <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt="" />
                            </p>
                            <b>天天坚果（活力派）25g</b>
                            <span>￥22.80</span>
                        </li>
                        <li>
                            <p>
                                <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt="" />
                            </p>
                            <b>天天坚果（活力派）25g</b>
                            <span>￥22.80</span>
                        </li>
                    </ul>
                </div>
            </Tabstyle>
        )
    }
}
