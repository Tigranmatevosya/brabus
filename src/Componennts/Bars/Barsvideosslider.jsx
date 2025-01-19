
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/9/d/2/d/9d2d97c01f44e20ccc8d42609435a45904da3904/brabus_signature_night_24_thumbnail_v03-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2024
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/c/7/1/dc71ebaa8d3096a4c27b975bebe8f1c6d5789177/BRABUS%20SN%202023%20Full%20Show.jpg" alt="" />
                <h4>
                Signature Night 2023
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/b/a/b/e/babe2b2c76c215e1113953278444a3c339fe28a7/TBT%20TN%20Alternative%20v5-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2023
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/b/3/5/9/b359572ba7826bea7f72656e994f99a5ff9601f4/brabus_days_sn_2022_vlog_part_1_thumbnail-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2022
                </h4>
                <p>
                    road to show part 1/2 
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/e/f/8/7/ef87898dc4208d4d1eb71f47a61406a38f1ed211/brabus_days_sn_2022_vlog_part_2_thumbnail-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2022
                </h4>
                <p>
                road to show part 2/2
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/d/2/d/9d2d97c01f44e20ccc8d42609435a45904da3904/brabus_signature_night_24_thumbnail_v03-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2024
                </h4>
                <p>
                    full show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/c/7/1/dc71ebaa8d3096a4c27b975bebe8f1c6d5789177/BRABUS%20SN%202023%20Full%20Show.jpg" alt="" />
                <h4>
                Signature Night 2023
                </h4>
                <p>
                full show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>    
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/d/2/d/9d2d97c01f44e20ccc8d42609435a45904da3904/brabus_signature_night_24_thumbnail_v03-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2024
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/c/7/1/dc71ebaa8d3096a4c27b975bebe8f1c6d5789177/BRABUS%20SN%202023%20Full%20Show.jpg" alt="" />
                <h4>
                Signature Night 2023
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/b/a/b/e/babe2b2c76c215e1113953278444a3c339fe28a7/TBT%20TN%20Alternative%20v5-1387x780.jpg" alt="" />
                <h4>
                Signature Night 2023
                </h4>
                <p>
                Full Show
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>     
       </Swiper>
   );
 }
 