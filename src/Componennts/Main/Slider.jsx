import './Slider.scss'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
export default function Slider(){

    return <div className="Slider1111">

 
 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide   style={{margin:"0px"}}>
            <video  style={{width:"100%",height:"100vh"}} muted autoPlay loop controls >
            <source src='https://www.brabus.com/_Resources/Persistent/7/d/9/9/7d99c3561a5719941eb1b0247bda03675d8fc10c/BRABUS%20800%20Mean%20Green_WEBTEASER.mp4' />
            </video>
        </SwiperSlide>
        <SwiperSlide >
            <video  style={{width:"100%",height:"100vh"}} muted autoPlay loop controls >
            <source src='https://www.brabus.com/_Resources/Persistent/b/8/7/d/b87d3fc7e4592f049f00d805deddfc4c7fbc49b2/BRABUS_750_GT63_WEBTEASER.mp4' />
            </video>
        </SwiperSlide>
        <SwiperSlide >
            <video style={{width:"100%",height:"100vh"}} muted autoPlay loop controls >
            <source src='https://www.brabus.com/_Resources/Persistent/6/2/5/3/625311cd6c69b14ca069b573ac6d7faaa00ab9d0/WEBTEASER_BRABUS_Deep_Blue_2024_Commercial.mp4' />
            </video>
        </SwiperSlide>
        <SwiperSlide >
            <video style={{width:"100%",height:"100vh"}} muted autoPlay loop controls >
            <source src='https://www.brabus.com/_Resources/Persistent/2/c/e/9/2ce9469c3a15a25badab4b3551e7953bd937bcb5/BRABUS_PEETCH_Commercial_WEBTEASER.mp4' />
            </video>
        </SwiperSlide>
        {/* <SwiperSlide>
            <video muted autoPlay loop controls >
            <source src='' />
            </video>
        </SwiperSlide> */}
      </Swiper>

    </div>
}