import React, { Component } from "react";
import { tabBtnRoute } from "../../router";
import { NavLink } from "react-router-dom";
import { TabBarWrapper } from "./styled.js"
export default class TabBtn extends Component {
    render() {
        // console.log(tabBtnRoute)
        return (
            <TabBarWrapper>
                <ul>
                    {
                        tabBtnRoute.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </TabBarWrapper>
        )
    }
}