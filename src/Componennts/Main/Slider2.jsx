 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Slider2.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Slider2() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/3/b/9/c/3b9ca590881cbcfc2d06f522097ea3dc27e9734d/LK-070-00%20%282%29-2025x1138-1388x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihren Range-Rover</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/6/6/d/1/66d159fcf6e28a3827cf2141bde941b5337f16cc/_BRA0086-1469x826-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre G-, GLE- & GLS-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/6/1/a/961a11cec456c8374764285f7112fb623f34426b/_BRA0053-1920x1079-1388x780.jpg" alt="" />
                <h4>
                  CARBON KENNZEICHENHALTER
                </h4>
                <p>exklusiv angefertigt für Ihre G-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/1/5/1/8/1518188af50f99e96b127b7792a2172f581cde21/464-070-00%20%281%29-1387x780.jpg" alt="" />
                <h4>
                   LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre G-, GLE- & GLS-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/1/7/c/f17ca80b76796524eb09168b57efc7d65293d298/902-070-10%20%281%29-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für alle Porsche 911 der Baureihe 992</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/6/1/a/961a11cec456c8374764285f7112fb623f34426b/_BRA0053-1920x1079-1388x780.jpg" alt="" />
                <h4>
                  CARBON KENNZEICHENHALTER
                </h4>
                <p>exklusiv angefertigt für Ihre G-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/6/4/1/d641b49e739203424c3db51c7d9ba8542b297f58/223-070-10%20%285%29-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre C-, E- & S-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/3/b/9/c/3b9ca590881cbcfc2d06f522097ea3dc27e9734d/LK-070-00%20%282%29-2025x1138-1388x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihren Range-Rover</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/6/6/d/1/66d159fcf6e28a3827cf2141bde941b5337f16cc/_BRA0086-1469x826-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre G-, GLE- & GLS-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/6/1/a/961a11cec456c8374764285f7112fb623f34426b/_BRA0053-1920x1079-1388x780.jpg" alt="" />
                <h4>
                  CARBON KENNZEICHENHALTER
                </h4>
                <p>exklusiv angefertigt für Ihre G-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/1/5/1/8/1518188af50f99e96b127b7792a2172f581cde21/464-070-00%20%281%29-1387x780.jpg" alt="" />
                <h4>
                   LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre G-, GLE- & GLS-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/f/1/7/c/f17ca80b76796524eb09168b57efc7d65293d298/902-070-10%20%281%29-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für alle Porsche 911 der Baureihe 992</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/9/6/1/a/961a11cec456c8374764285f7112fb623f34426b/_BRA0053-1920x1079-1388x780.jpg" alt="" />
                <h4>
                  CARBON KENNZEICHENHALTER
                </h4>
                <p>exklusiv angefertigt für Ihre G-Klasse</p>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/6/4/1/d641b49e739203424c3db51c7d9ba8542b297f58/223-070-10%20%285%29-1387x780.jpg" alt="" />
                <h4>
                  LENDER SCHLUSSELCOVER SCHWARZ
                </h4>
                <p>für Ihre C-, E- & S-Klasse</p>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 