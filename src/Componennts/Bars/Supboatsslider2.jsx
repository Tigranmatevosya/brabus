import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Supboatsslider2.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Supboatsslider2() {
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
        style={{height:"90vh",background:"white"}}
      >
        <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/9/a/7/1/9a71d5d0f3aaaebea73465672fc44e127fb7cac5/3_BRABUS_Shadow900Sun-Top_set3%20%287%29-520x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/3/5/b/3/35b3e8477b1f04a20c12b29b1da63de7bc679b74/2_Onboard_Experience_set1%20%283%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/3/0/3/4/30348c1f42d25194548f63d49977f15c7ab35d8a/2_Onboard_Experience_set1%20%284%29.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/c/9/0/a/c90aa371e1ecbb84b29aa988d268ff0e295bba92/2_Onboard_Experience_set1%20%285%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/1/9/7/4/1974268d8ba6d37856872835ccb8d4a21bc58a10/2_Onboard_Experience_set1%20%281%29.jpg" alt="" /></SwiperSlide>
        
     </Swiper>
    </>
  );
}
