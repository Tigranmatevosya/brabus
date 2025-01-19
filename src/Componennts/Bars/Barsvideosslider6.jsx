
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider6() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/6/0/a/2/60a228d0074e1e14c005e3b6bc3401c75b26cf33/FCCJoeBerry%20gr%C3%BCn-1387x780.jpg" alt="" />
                <h4>#FANTASYCARCOLLECTION MIT JOE BERRY
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
                <img src="https://www.brabus.com/_Resources/Persistent/e/7/8/4/e7842031c0f0e8e86bbcd82411980b9e270783ef/FCC%20J%C3%B6rn%202-1387x780.jpg" alt="" />
                <h4>#FANTASYCARCOLLECTION MIT JÖRN GANDER
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
                <img src="https://www.brabus.com/_Resources/Persistent/a/a/0/3/aa03c78bc534e0b88470716beab01ff6402bcf94/FCC%20Chris%20Ezeala%20Football%20v2-1387x780.jpg" alt="" />
                <h4>#FANTASYCARCOLLECTION MIT CHRIS EZEALA
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
                <img src="https://www.brabus.com/_Resources/Persistent/a/2/8/d/a28da13c03a9de453d320b9c44d98f8337b4e095/fcc%20jordan%20sanford-1387x780.jpg" alt="" />
                <h4>#FANTASYCARCOLLECTION MIT JORDAN SANFORD
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
                <img src="https://www.brabus.com/_Resources/Persistent/2/c/0/c/2c0cc8ee41e68c95af1b4b562953038b8d4e2da4/fantasy_car_collection_dominik_fisch_thumbnail-1387x780.jpg" alt="" />
                <h4>#FANTASYCARCOLLECTION MIT DOMINIK FISCH
                </h4>
                <p>
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 