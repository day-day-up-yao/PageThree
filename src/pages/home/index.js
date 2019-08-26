import React,{Component} from "react";
import Header from "../../component/headers"
import Banner from "../../component/home/banner"
import Navgation from "../../component/home/navgation"
import Prod from "../../component/home/prod"
import Tab from "../../component/home/tab"
export default class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
                <Navgation/>
                <Prod/>
                <Tab/>
            </div>
        )
    }
}