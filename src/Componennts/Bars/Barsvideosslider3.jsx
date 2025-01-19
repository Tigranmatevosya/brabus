import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Barsvideosslider.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Barsvideosslider7() {
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
               <img src="https://www.brabus.com/_Resources/Persistent/4/0/6/c/406c1ddbbf26fe35607c260c2413e74b346b5732/HWCLDOKU%20Trailer%201%20copy-1387x780.jpg" alt="" />
               <h4>THE UNTOLD STORIES BEHIND BRABUS SUPERCARS
               </h4>
               <p>HOW WE CREATE LUXURY - TRAILER
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/c/4/0/1/c4016114811811d0137406c22c5e59b0345e3e75/EP04%20-%20More%20than%20just%20a%20car2-gold-1387x780.jpg" alt="" />
               <h4>WE MADE THIS SUPERCAR AS A TRIBUTE TO MY LATE DAD
               </h4>
               <p>BRABUS #DOCUMENTARY EP 04
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/4/5/b/b/45bb70dc839aaaf99e3281442d144de6a0c37973/HWCLDOCU%20EP01-1-1387x780.jpg" alt="" />
               <h4>INSIDERS REVEAL HOW THE BRABUS 6X6 IS REALLY BUILT
               </h4>
               <p>BRABUS #DOCUMENTARY EP 01
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/b/5/6/8/b568580ed3af60465e7edcf5000a2f9411f6eb92/HWCL%20EP02%20-Gold-1387x780.jpg" alt="" />
               <h4>PUSHING THE BRABUS XLP 6X6 TO ITS LIMITS
               </h4>
               <p>BRABUS #DOCUMENTARY EP 02
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/a/d/0/c/ad0cedf1821f3672c6b6e25fbeb416ba1d026d70/Absolute%20Secrets%20Brabus%20Insights%20EP03-2-1387x780.jpg" alt="" />
               <h4>THE BRABUS ROCKET ON AN ADVENTUROUS TEST
               </h4>
               <p>BRABUS #DOCUMENTARY EP 03
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/4/0/6/c/406c1ddbbf26fe35607c260c2413e74b346b5732/HWCLDOKU%20Trailer%201%20copy-1387x780.jpg" alt="" />
               <h4>THE UNTOLD STORIES BEHIND BRABUS SUPERCARS
               </h4>
               <p>HOW WE CREATE LUXURY - TRAILER
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/c/4/0/1/c4016114811811d0137406c22c5e59b0345e3e75/EP04%20-%20More%20than%20just%20a%20car2-gold-1387x780.jpg" alt="" />
               <h4>WE MADE THIS SUPERCAR AS A TRIBUTE TO MY LATE DAD
               </h4>
               <p>BRABUS #DOCUMENTARY EP 04
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/4/5/b/b/45bb70dc839aaaf99e3281442d144de6a0c37973/HWCLDOCU%20EP01-1-1387x780.jpg" alt="" />
               <h4>INSIDERS REVEAL HOW THE BRABUS 6X6 IS REALLY BUILT
               </h4>
               <p>BRABUS #DOCUMENTARY EP 01
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/b/5/6/8/b568580ed3af60465e7edcf5000a2f9411f6eb92/HWCL%20EP02%20-Gold-1387x780.jpg" alt="" />
               <h4>PUSHING THE BRABUS XLP 6X6 TO ITS LIMITS
               </h4>
               <p>BRABUS #DOCUMENTARY EP 02
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
        <SwiperSlide style={{height : "50vh"}}>
           <div className='slider2div'>
               <img src="https://www.brabus.com/_Resources/Persistent/a/d/0/c/ad0cedf1821f3672c6b6e25fbeb416ba1d026d70/Absolute%20Secrets%20Brabus%20Insights%20EP03-2-1387x780.jpg" alt="" />
               <h4>THE BRABUS ROCKET ON AN ADVENTUROUS TEST
               </h4>
               <p>BRABUS #DOCUMENTARY EP 03
               </p>
               <div className="posdiv">
               <i class="fa fa-youtube-play" aria-hidden="true"></i>
               </div>
           </div>
        </SwiperSlide>
      </Swiper>
  );
}
