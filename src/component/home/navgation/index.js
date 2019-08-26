import React, { Component } from 'react'
import { Navgationstyled } from "./styled"
import { HomeNav } from "../../../api/home"
export default class Navgation extends Component {
    constructor() {
        super()
        this.state = {
            Navlist:[]
        }
    }
    render() {
        let { Navlist } = this.state;
        // console.log(Navlist)
        return (
            <Navgationstyled>
                <ul>
                    {
                        Navlist.map((item, index) => (
                            <li key={index}>
                                <p>
                                    <img src={item.imageUrl} alt="" />
                                </p>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </Navgationstyled>
        )
    }
    async componentDidMount() {
        let Navdata = await HomeNav();
        this.setState({
            Navlist: Navdata.data.ad_channel
        })
    }
}
