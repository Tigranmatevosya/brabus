import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brabusxawkslider1.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Brabusxawkslider1() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={-3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{height:"90vh",background:"white",marginTop:"100px"}}
      >
       <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/8/1/7/a/817aa69aebab75db3f8dc5937981db6e1e310ef1/AwakexBRABUS_Boat_and_Board%20%2823%29-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/a/e/6/3/ae634606a2b51d8312390a7b0c325f021e841a65/AwakexBRABUS_Board%20%2866%29-1170x780.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/f/b/c/b/fbcbfc7daccb24c4a1a9e1ae39700914d4f07662/AwakexBRABUS_Boat_and_Board%20%2837%29-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/6/c/b/a/6cba77f64200cf31ddbfb00e517b0ca479bb795a/AwakexBRABUS_Boat_and_Board%20%2848%29-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/7/2/5/2725a1a16fc461d5fa8f95f874244cbf6d05df66/AwakexBRABUS_Boat_and_Board%20%2834%29-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/9/9/5/f/995fc0b0420157ed1da8224f6642626174715bd3/AwakexBRABUS_Boat_and_Board%20%2836%29-1170x780.jpg" alt="" />
        </SwiperSlide>
     </Swiper>
     
    </>
  );
}
