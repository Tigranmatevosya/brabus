
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider8() {
   return (
       <Swiper
         slidesPerView={3.5}
         spaceBetween={10}
         centeredSlides={false}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
         style={{height : "50vh",background:"white"}}
       >
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/c/9/8/b/c98bd810c76aebdbd6dfecd56fe6ed334177df49/q_and_q_number_13_summmer_special_thumbnail_v2-1387x780.jpg" alt="" />
                <h4>The next BRABUS 1 of 1 Masterpiece  
                </h4>
                <p>Q&A #13
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/4/5/9/8/4598eb5a9610f369e4adfc98acd89c8331acd06e/q%26a_12_thumbnail-1387x780.jpg" alt="" />
                <h4>THIS IS THE POWER OF SOCIAL MEDIA
                </h4>
                <p>Q&A #12
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/3/5/2/5/3525c151165bb728c62b4b81adf53b322a9d6471/q%26a_number_011_thumbnail-1387x780.jpg" alt="" />
                <h4>MORE NEW BRANDS COMING SOON?!
                </h4>
                <p>Q&A #11
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/d/2/a/dd2aed32b3b2dd460dc4831cdcb1879e5b4cd502/q%26a_number_010_thumbnail-1387x780.jpg" alt="" />
                <h4>100% BRABUS?! IS IT POSSIBLE? Your Questions, My Answers!
                </h4>
                <p>Q&A #10
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/0/4/e/d04ebff777bb3bff7da8bbd628786bc48135b43f/q_and_a_number_09_thumbnail-1387x780.jpg" alt="" />
                <h4>MY TOP 3 DRIVING EXPERIENCES OF ALL TIME?!
                </h4>
                <p>Q&A #09
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 