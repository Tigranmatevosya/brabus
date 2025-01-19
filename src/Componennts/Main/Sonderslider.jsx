import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Sonderslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Sonderslider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"130vh",width:"100%"}}><img style={{width:"100%"}} src="https://www.brabus.com/_Resources/Persistent/f/c/c/6/fcc61b54818c8d8fab784be43fc03c3b35d2a073/20200309-002_INVICTO_L_3_4_front-shelter.jpg" alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"130vh",width:"100%"}}><img style={{width:"100%"}} src="https://www.brabus.com/_Resources/Persistent/3/2/3/5/32355c3ab0d7893fc5e99792df1baaad5179c46c/20200303-003_INVICTO_L_side-shelter.jpg" alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"130vh",width:"100%"}}><img style={{width:"100%"}} src="https://www.brabus.com/_Resources/Persistent/3/5/6/4/356465d8e87fc6b50482c23f7a6ee2d837694195/20200320-004_INVICTO_P34_rear-shelter.jpg" alt="" /></SwiperSlide>
        <SwiperSlide style={{height:"130vh",width:"100%"}}><img style={{width:"100%"}} src="https://www.brabus.com/_Resources/Persistent/3/4/7/4/3474243e1cb063bf71b9373824cd00306d487fd9/INVICTO%20Shelter%20Cell%20Prinzip%2001.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
