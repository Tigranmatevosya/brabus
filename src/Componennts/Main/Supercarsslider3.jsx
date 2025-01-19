import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Supercarsslider2.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Supercarsslider3() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{height:"100vh"}}
      >
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/5/0/a/1/50a149794cdec8a2597089a0bcf04239f392e329/_BRA1357-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/c/e/7/0/ce705a78bc46cb1208fb2d2fefb882aa27d16090/_BRA1052-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/e/4/b/f/e4bf81171adf495aa489c47f777922e9b328b680/_BRA9811-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/3/5/f/f/35ff9084498445505d23e4def78990a3305982a1/20211011_Brabus_XLP_Superblack_6413-1170x780.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/c/e/7/0/ce705a78bc46cb1208fb2d2fefb882aa27d16090/_BRA1052-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/5/0/a/1/50a149794cdec8a2597089a0bcf04239f392e329/_BRA1357-1170x780.jpg" alt="" /></SwiperSlide>
    
    
     </Swiper>
    </>
  );
}
