import React,{Component,Fragment} from "react";
import Header from "../../component/headers"
import Banner from "../../component/home/banner"
import Navgation from "../../component/home/navgation"
import Prod from "../../component/home/prod"
import Tab from "../../component/home/tab"
import BscrollComponent from "../../common/bscroll"
import {Page} from "../../common/commonstyle"
export default class Home extends Component{
    render(){
        return(
            <Page>
                <Header/>
                <BscrollComponent>
                       <div>
                        <Banner/>
                            <Navgation/>
                            <Prod/>
                            <Tab/>
                       </div>
                    </BscrollComponent>
            </Page>
        )
    }
}