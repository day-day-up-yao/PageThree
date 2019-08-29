import React, { Component } from 'react'
import { Prodstyle } from "./styled"
import { HomeProd, HomeProdOne, HomeProdTwo, HomeProdThree } from "../../../api/home"
import {connect} from "react-redux"
class Prod extends Component {
    constructor() {

        super()
        this.state = {
            Prodlist: [],
            ProdlistOne: [],
            ProdlistTwo: [],
            ProdlistThree: []
        }
    }
    render() {
        let { Prodlist, ProdlistOne, ProdlistTwo, ProdlistThree } = this.state;
        // console.log(ProdlistOne)
        return (
            <Prodstyle>
                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static2.laiyifen.com/files/cms/image/1562920592878_2497.jpg?iopcmd=convert&dst=jpg&Q=80" alt="" />
                    </div>
                    <div className="pro_C">
                        <ul>
                            {
                                Prodlist.map((item, index) => (
                                    <li key={index} onClick={this.props.haddleTodetail.bind(this,item.mpId)}>
                                        <p>
                                            <img src={item.picUrl} alt="" />
                                        </p>
                                        <b>{item.mpName}</b>
                                        <span>￥{item.price}0</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static1.laiyifen.com/files/cms/image/1562920596906_99.jpg?iopcmd=convert&dst=jpg&Q=80" alt="" />
                    </div>
                    <div className="pro_C">
                        <ul>
                            {
                                ProdlistOne.map((item, index) => (
                                    <li key={index} onClick={this.props.haddleTodetail.bind(this,item.mpId)}>
                                        <p>
                                            <img src={item.picUrl} alt="" />
                                        </p>
                                        <b>{item.mpName}</b>
                                        <span>￥{item.price}0</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static2.laiyifen.com/files/cms/image/1562920611862_6167.jpg?iopcmd=convert&dst=jpg&Q=80" alt="" />
                    </div>
                    <div className="pro_C">
                        <ul>
                            {
                                ProdlistTwo.map((item, index) => (
                                    <li key={index} onClick={this.props.haddleTodetail.bind(this,item.mpId)}>
                                        <p>
                                            <img src={item.picUrl} alt="" />
                                        </p>
                                        <b>{item.mpName}</b>
                                        <span>￥{item.price}0</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="pro_top">
                    <div className="proimg">
                        <img src="https://static4.laiyifen.com/files/cms/image/1562920706050_8705.jpg?iopcmd=convert&dst=jpg&Q=80" alt="" />
                    </div>
                    <div className="pro_C">
                        <ul>
                            {
                                ProdlistThree.map((item, index) => (
                                    <li key={index} onClick={this.props.haddleTodetail.bind(this,item.mpId)}>
                                        <p>
                                            <img src={item.picUrl} alt="" />
                                        </p>
                                        <b>{item.mpName}</b>
                                        <span>￥{item.price}0</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Prodstyle>
        )
    }
    async componentDidMount() {
        let data = await HomeProd();
        let dataOne = await HomeProdOne();
        let dataTwo = await HomeProdTwo();
        let dataThree = await HomeProdThree();


        // console.log(dataOne.data.listObj)
        this.setState({
            Prodlist: data.data.listObj,
            ProdlistOne: dataOne.data.listObj,
            ProdlistTwo: dataTwo.data.listObj,
            ProdlistThree: dataThree.data.listObj,

        })
    }


}

const mapStateProps = (state)=>({

})
const mapDispatchProps = (dispatch)=>({
    haddleTodetail(mpId){
        console.log(mpId)
    }
})
export default connect(mapStateProps,mapDispatchProps)(Prod)
