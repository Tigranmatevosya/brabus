
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider2() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/0/e/1/2/0e128d3fa8f5c4f79913f1bcffc9d3075211c59e/BRABUS_Deep_Blue_2024_thumbnail_v02-1387x780.jpg" alt="" />
                <h4>
                BRABUS DEEP BLUE MASTERPIECES
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>     
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/0/7/1/d071bbcc49ddfdc5d21c31cc781ac4c21f99d767/peetch_modelle_thumbnail_v2-1387x780.jpg" alt="" />
                <h4>
                BRABUS DEEP BLUE MASTERPIECES
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/5/e/2/95e2edec8bac48cf0e5d4bfeccf85d2879a85950/s_klasse_allgray_thumbnail_v1-1387x780.jpg" alt="" />
                <h4>
                BRABUS ALL GRAY
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/2/0/f/7/20f73df63bdb08ad1fc58c79fa8948f3d571a520/big_boy_1200_thumbnail_v03-1387x780.jpg" alt="" />
                <h4>
                BRABUS BIG BOY 1200
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/4/5/f/f45fa0a83d6887bb7659e6185da2eefc330712ad/BRABUS%20800%20Mean%20Green_Thumbnail_v01-1387x780.jpg" alt="" />
                <h4>
                BRABUS BIG BOY 1200
                </h4>
                <p>
                Based on Mercedes-AMG G 63
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/2/a/e/f/2aef3ac21b6705641f783239d01df9fa614da9f1/g800_facelift_thumbnail_1_v2-1387x780.jpg" alt="" />
                <h4>
                BRABUS 800 SUPERBLACK
                </h4>
                <p>
                Based on Mercedes-AMG G 63
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/7/0/2/2/702290175ac4ed4cdf772eaa2f4d79e36681a5ed/cullinan_fahrzeuge_thumbnail_3_v5-1387x780.jpg" alt="" />
                <h4>
                BRABUS 700 BLUE SKY
                </h4>
                <p>
                Based on Rolls-Royce Cullinan
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/e/1/1/c/e11c4ee827d0c5de16a0495e712df6a7d393078a/%20brabus_gts_thumbnail_v05-1387x780.jpeg" alt="" />
                <h4>
                BRABUS ROCKET GTS
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/3/7/3/0/3730b826cf4659771c8c00f761fb3e99c8b1e5ea/GT1000_commercial_thumbnail_v04-1387x780.jpg" alt="" />
                <h4>
                BRABUS ROCKET 1000
                </h4>
                <p>
                <p>Based on Mercedes-AMG GT 63 S E </p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/c/8/6/a/c86a95e9d99776bbac79faf092bc6fd9a57a7b08/bodosl_thumbnail_v1-1387x780.jpg" alt="" />
                <h4>
                BRABUS 750 Bodo Buschmann Edition
                </h4>
                <p>
                Based on Mercedes-AMG SL 63
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/0/e/1/2/0e128d3fa8f5c4f79913f1bcffc9d3075211c59e/BRABUS_Deep_Blue_2024_thumbnail_v02-1387x780.jpg" alt="" />
                <h4>
                BRABUS DEEP BLUE MASTERPIECES
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>     
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/0/7/1/d071bbcc49ddfdc5d21c31cc781ac4c21f99d767/peetch_modelle_thumbnail_v2-1387x780.jpg" alt="" />
                <h4>
                BRABUS DEEP BLUE MASTERPIECES
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/5/e/2/95e2edec8bac48cf0e5d4bfeccf85d2879a85950/s_klasse_allgray_thumbnail_v1-1387x780.jpg" alt="" />
                <h4>
                BRABUS ALL GRAY
                </h4>
                <p>
                Based on Mercedes-AMG S 63 E 
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide> 
       </Swiper>
   );
 }
 