import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brabusxjobslider2.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Brabusxjobslider2() {
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
        style={{height:"90vh",background:"white",marginTop:"100px"}}
      >
       <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/7/c/a/c/7cacade3b3955d41ecf13fc2b366ac51bdf3ecfa/Jobe%20Sports%20Brabus%20DNG-200-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/4/3/2/b432c05e9edafb3ac825b32547e86109388a7172/Jobe%20Sports%20Brabus%20DNG-207-520x780.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/c/6/d/bc6d123eedfb6280587f7894e373dd089f867cec/Jobe%20Sports%20Brabus%20DNG-188-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/e/c/c/6/ecc60af8d297d14e1b6a30692f62599f91f45775/Jobe%20Sports%20%26%20Brabus-28-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/c/0/f/1/c0f1569ea764deae51ca3e9f1ff6de3bf1022cb5/Jobe%20Sports%20%26%20Brabus-14-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/3/1/5/5/315537cff5e96dd121b4f5ca68b1797bdd926a33/Jobe%20Sports%20Brabus%20DNG-133-1170x780.jpg" alt="" />
        </SwiperSlide>
     </Swiper>
     
    </>
  );
}
