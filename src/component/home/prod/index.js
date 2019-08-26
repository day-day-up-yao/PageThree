import React, { Component } from 'react'
import {Prodstyle} from "./styled"
import {HomeProd} from "../../../api/home"
export default class Prod extends Component {
    constructor(){
        
        super()
        this.state={
            Prodlist:[]
        }
    }
    render() {
       
        return (
            <Prodstyle>
                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static2.laiyifen.com/files/cms/image/1562920592878_2497.jpg?iopcmd=convert&dst=jpg&Q=80" alt=""/>
                    </div>
                    <div className="pro_C">
                       <ul>
                           <li>
                               <p>
                                   <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt=""/>
                               </p>
                               <b>碧根果</b>
                               <span>￥22.80</span>
                           </li>
                       </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static1.laiyifen.com/files/cms/image/1562920596906_99.jpg?iopcmd=convert&dst=jpg&Q=80" alt=""/>
                    </div>
                    <div className="pro_C">
                       <ul>
                           <li>
                               <p>
                                   <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt=""/>
                               </p>
                               <b>碧根果</b>
                               <span>￥22.80</span>
                           </li>
                       </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static2.laiyifen.com/files/cms/image/1562920611862_6167.jpg?iopcmd=convert&dst=jpg&Q=80" alt=""/>
                    </div>
                    <div className="pro_C">
                       <ul>
                           <li>
                               <p>
                                   <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt=""/>
                               </p>
                               <b>碧根果</b>
                               <span>￥22.80</span>
                           </li>
                       </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static4.laiyifen.com/files/cms/image/1562920706050_8705.jpg?iopcmd=convert&dst=jpg&Q=80" alt=""/>
                    </div>
                    <div className="pro_C">
                       <ul>
                           <li>
                               <p>
                                   <img src="https://static1.laiyifen.com/files/product/image/1556240621673_3793.jpg?iopcmd=thumbnail&type=6&width=300&height=300" alt=""/>
                               </p>
                               <b>碧根果</b>
                               <span>￥22.80</span>
                           </li>
                       </ul>
                    </div>
                </div>
            </Prodstyle>
        )
    }
    async componentDidMount() {
        let data = await HomeProd();
        console.log(data)
    }
    
}
