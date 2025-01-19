 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Pmediaslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Pmediaslider() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/2/4/f/3/24f3f22619d98d462e731d7065720d07d68eb31f/Screenshot%202024-09-26%20at%2014.46.09-1934x1290-1169x780.png" alt="" />
                <h4>
                BRABUS SHADOW 900 BLACK
                </h4>
                <p>Jon Olsson</p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/0/c/9/4/0c9425c4730190dfa54e92b7ec0d89f2b6f449bb/Polch_Marine-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 900 STEALTH GREEN
                </h4>
                <p> 
                Boote Polch
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/a/8/d/3/a8d3cfac52028e710cb3c392e94b2de95444fe44/club%20Marine%20TV-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 300 BOAT TEST
                </h4>
                <p> 
                Club Marine TV
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/0/e/d/f0ed82adf8ca4a61c2f7fd2efbfbb6ecf2b119dd/eyachts-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 300 SPEED TEST
                </h4>
                <p> 
                eyachts
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/8/3/a/a/83aab40cd5fe98d86275755e65409bb2acddc8cc/Screenshot%202024-09-26%20at%2015.37.24-1934x1290-1169x780.png" alt="" />
                <h4>
                Brabus Shadow 1200: Is This The Swiss 
                </h4>
                <p> 
                YachtWay
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/7/9/6/4/7964c4ca33ea6f069cb20eb4a3cb88d2276fb3dc/Screenshot%202024-10-02%20at%2010.11.52-2110x1408-1169x780.png" alt="" />
                <h4>
                fast the Brabus Shadow 1200 Brabus 
                </h4>
                <p> 
                BRABUS Marine London Group
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/4/f/1/1/4f112c9078cc534e7245e7dedcfdd9b2f346b266/Screenshot%202024-10-02%20at%2011.58.26-1910x1274-1169x780.png" alt="" />
                <h4>
                WHAT YOU GET IN A 800.000€ BOAT
                </h4>
                <p>  Jon Olsson       </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/0/4/c/1/04c1536c28d8076780aa1188f3fff4130e19abc6/Youtube_Thumbnail_London%20Group-1386x924-1170x780.png" alt="" />
                <h4>
                BRABUS Shadow 1200 Walkthrough
                </h4>
                <p> 
                BRABUS Marine London Group
                 </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 