
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider5() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/2/7/0/d/270dec4b0e0df850ba1d347b39ac88e6749cfacf/tech_talk_range_rover_thumbnail-1387x780.jpg" alt="" />
                <h4>BRABUS 600 for Range Rover P530!
                </h4>
                <p>What's new? All highlights in one video
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/1/6/d/f16d347cdba7735ead4c3f08000abd4426a74b2b/rollenpruefstand_g900_thumbnail_v2-1387x780.jpg" alt="" />
                <h4>BRABUS 900 SUPERBLACK
                </h4>
                <p>POWER TEST!! - Wie stark ist er wirklich?
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/b/5/5/9/b5590cb208375cea624d96c2fcf09d349011a3c9/TechTalk%20GT930%20Alternative-1387x780.jpg" alt="" />
                <h4>BRABUS 930
                </h4>
                <p>This is the most powerful BRABUS ever built!!
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/b/4/d/fb4d4e742b1310ab94eecb72132d736da2c3c50b/TTSLBB-1387x780.jpg" alt="" />
                <h4>BRABUS 750 Bodo Buschmann Edition
                </h4>
                <p>Meinem Vater gewidmet...
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/3/e/b/6/3eb6b7d4ff75b1cb7a32838fb55a410c77a2f2a4/4x4_tech_talk_thumbnail-1387x780.jpg" alt="" />
                <h4>BRABUS 800 4X4² Stealth Green
                </h4>
                <p>Maximum off-road luxury?!
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/2/7/0/d/270dec4b0e0df850ba1d347b39ac88e6749cfacf/tech_talk_range_rover_thumbnail-1387x780.jpg" alt="" />
                <h4>BRABUS 600 for Range Rover P530!
                </h4>
                <p>What's new? All highlights in one video
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 