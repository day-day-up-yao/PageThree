import React, { Component } from 'react'
import { Citystyle } from "./styled"
import { connect } from "react-redux"
import { Citydata } from "../../api/city"
import { CityAction } from "../../actions/actionCreator"
import { Page } from "../../common/commonstyle"
import  BscrollComponent  from "../../common/bscroll"
class City extends Component {
    constructor() {
        super()
        this.state = {
            citylist: []
        }
    }
    render() {
        let { citylist } = this.state;
        return (
            <Page>
                 
                <Citystyle>

                    <div className="city_body" >
                    <BscrollComponent ref="BscrollComponent">
                            <div className="cityCon" ref="scroll">
                                {/* <!--热门城市--> */}
                                <div className="hot_city">
                                    <div className="hot_title">
                                        <div className="cityspn" onClick={this.props.haddleBack.bind(this)}>×</div>
                                        <span>当前定位地址</span>

                                    </div>
                                    <div className="hot_city_list" >
                                        <div className="hot_city_name">
                                            北京市昌平区
                                </div>
                                    </div>
                                </div>
                                {/* <!--城市列表--> */}
                                <div className="city_list" ref="list">
                                    {
                                        citylist.map((item, index) => (
                                            <div className="city_list_item" key={index}>
                                                <div className="city_title_letter">{item.key}</div>
                                                <div className="city_list_name">
                                                    {
                                                        item.list.map((list, idx) => (
                                                            <div onClick={this.props.haddleCityName.bind(this, list.areaName)} className="city_list_name_item" key={idx}>{list.areaName}</div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            </BscrollComponent>
                            <div className="city_list_index">
                                <div className="index_item">
                                    {
                                        citylist.map((item, index) => (
                                            <p onClick={this.haddleCityindx.bind(this,index)} key={index}>{item.key}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        
                    </div>

                </Citystyle>
                
            </Page>
        )
    }
    async componentDidMount() {
        let citydata = await Citydata();
        // console.log(citydata.data)
        this.setState({
            citylist: citydata.data
        })
        console.log(this.refs.scroll)
    }
    haddleCityindx(index){
        let cityfirstNumber = this.refs.list.querySelectorAll(".city_title_letter")
        this.refs.BscrollComponent.scroll.scrollTo(0,-cityfirstNumber[index].offsetTop,500)
             console.log(this.refs.BscrollComponent.scroll)   
    }

}
const mapStateProps = (state) => ({

})
const mapDispatchProps = (dispatch) => ({
    haddleBack() {
        // console.log(this.props.history)
        this.props.history.push("/home")
    },
    haddleCityName(cityName) {
        // console.log(cityName)
        dispatch(CityAction(cityName))
        this.props.history.push("/home")

    }
})


export default connect(mapStateProps, mapDispatchProps)(City)
