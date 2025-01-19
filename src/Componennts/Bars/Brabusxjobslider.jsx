 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Brabusxjobslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Brabusxjobslider() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/2/4/c/0/24c0f634279e7c2c58d063322d41af5efa7816b1/vest12-1170x780.jpg" alt="" />
                <h4>
                BRABUS X JOBE SHADOW FRAGMENT 
                </h4>
                <p>DAMEN</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/2/a/c/f2ac113e4d27a99369769b847c0a3359ec843f1b/sup10-1170x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>DAMEN</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/4/3/e/943e9bf68fe64810b2555b5686b1b969e3c89eb8/SUP-4-1170x780.jpg" alt="" />
                <h4>
                BRABUS X JOBE SHADOW ADVENTURE 
                </h4>
                <p>LIMITED EDITION</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/a/f/0/5/af0552373734d69aedde6e25b021a3362de236d5/Wakeboard-1-1170x780.jpg" alt="" />
                <h4>
                WASSERABWEISENDE SPORTTASCHE
                </h4>
                <p>DAMEN</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/2/0/a/f/20af7506ce079c92950ff227b2378f8b93ea6993/vest4-1170x780.jpg" alt="" />
                <h4>
                ENTDECKEN SIE  GANZE KOLLEKTION
                </h4>
                <p>DAMEN</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/2/4/c/0/24c0f634279e7c2c58d063322d41af5efa7816b1/vest12-1170x780.jpg" alt="" />
                <h4>
                BRABUS X JOBE SHADOW FRAGMENT 
                </h4>
                <p>HERREN</p>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 