import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Supboatsslider3.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Supboatsslider3() {
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
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/a/0/9/2a092b6e87e6c2c729846e1d8961027bedc6a39b/2_AttentionToDetail_set1%20%281%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/2/b/e/22be326b97f4cff1ebf040b74364a8cff053c146/2_AttentionToDetail_set1%20%282%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/f/4/2/2f42049ce01cda63ff4fde5dd5ddf4779dfdbf18/2_AttentionToDetail_set1%20%283%29.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/f/4/2/2f42049ce01cda63ff4fde5dd5ddf4779dfdbf18/2_AttentionToDetail_set1%20%283%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/1/7/8/b178a1d70c8e4bdd45828e6d56e99b31d545bff9/2_AttentionToDetail_set1%20%284%29.jpg" alt="" /></SwiperSlide>
         <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/d/9/9/4d996c1013da980ec29b0fd571f3fef72e68095b/2_AttentionToDetail_set1%20%285%29.jpg" alt="" /></SwiperSlide>
         <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/7/4/0/2740117747c7326230e330c40eb88510b8e60e4e/2_AttentionToDetail_set1%20%286%29.jpg" alt="" /></SwiperSlide>
           <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/1/c/1/4/1c14dceb387ba7d2c6543c84a69c61de44c9530e/2_AttentionToDetail_set1%20%287%29.jpg" alt="" /></SwiperSlide>
           <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/3/a/a/03aa9dc988d45b630977b7d0e92b531983fc5c1d/2_AttentionToDetail_set1%20%288%29.jpg" alt="" /></SwiperSlide>
     </Swiper>
    </>
  );
}
