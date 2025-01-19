import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Supercarsslider2.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Supercarsslider2() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={-10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{height:"100vh"}}
      >
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/d/6/e/4d6ef71d9a592aadc05121d40bd28fb12fdd2c06/20210427_Brabus_8845-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/6/4/a/064a9ec42675e6a21231a29add0991a6f41e0e2b/_13A0599-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/d/8/f/0d8f202b555ab6c43443aa8ee03a01b5cc8efa98/Karriere_Motor-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/7/c/8/8/7c88918f1bff87b410ca3b9e761103fd8c2d599e/Supercars%20Webpage3-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/d/6/e/4d6ef71d9a592aadc05121d40bd28fb12fdd2c06/20210427_Brabus_8845-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/6/4/a/064a9ec42675e6a21231a29add0991a6f41e0e2b/_13A0599-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/d/8/f/0d8f202b555ab6c43443aa8ee03a01b5cc8efa98/Karriere_Motor-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/7/c/8/8/7c88918f1bff87b410ca3b9e761103fd8c2d599e/Supercars%20Webpage3-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/d/8/f/0d8f202b555ab6c43443aa8ee03a01b5cc8efa98/Karriere_Motor-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/6/4/a/064a9ec42675e6a21231a29add0991a6f41e0e2b/_13A0599-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/d/6/e/4d6ef71d9a592aadc05121d40bd28fb12fdd2c06/20210427_Brabus_8845-1170x780.jpg" alt="" /></SwiperSlide> 
     </Swiper>
    </>
  );
}
