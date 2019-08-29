import React, { Component } from 'react'
import { Bannerstyle } from "./styled"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default class Banner extends Component {
    render() {
        return (
            <Bannerstyle>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><p><img src="https://static4.laiyifen.com/files/cms/image/1566144826810_7657.jpg?iopcmd=convert&dst=jpg&Q=80" alt="" /></p></div>
                        <div className="swiper-slide"><p><img src="https://static3.laiyifen.com/files/cms/image/1566748994595_8728.png" alt="" /></p></div>
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </Bannerstyle>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                disableOnInteraction: false
              },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }) 
    }
}
