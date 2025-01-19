
 
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 
 import './Barsvideosslider.scss';
 
 // import required modules
 import { Pagination } from 'swiper/modules';
 
 export default function Barsvideosslider4() {
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
                <img src="https://www.brabus.com/_Resources/Persistent/3/b/c/3/3bc37bdc89a52d76c33205a9dfaa0088bb3b1a2f/Unbenannt-1-1387x780.jpg" alt="" />
                <h4>BRABUS SHADOW 1200 Range
                </h4>
                <p>BIGGER. BOLDER. BRABUS MARINE.
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/6/e/b/a/6eba71e2b209d479437c8c4f75ef0f75891bb511/BRABUS%20Shadow%20900XC%20Black%20Ops%20Signature%20Edition%20klein%20%2811%29-1387x780.jpg" alt="" />
                <h4>BRABUS SHADOW 900 XC 
                </h4>
                <p>BRABUS SHADOW 900 XC 
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/d/c/8/ddc828bbdfd37ed85380462cbf0f43b8cd4dcad1/Screenshot%20Shadow%20900%20Sun%20Top-1381x780.png" alt="" />
                <h4>BRABUS Shadow 900 SUN-TOP
                </h4>
                <p>Freediving & Beach Fresco
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/1/0/5/9/10599eafbab96b61bc6fc881c814d1d3413e569e/BRABUS%20Shadow%20900%20Depp%20Blue%20Mallorca_Thumbnail-1387x780.jpg" alt="" />
                <h4>BRABUS Shadow 900 Deep Blue
                </h4>
                <p>Heart of The Ocean
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/e/5/7/f/e57fec7a008277a184dc742728d5a377eff2f5d6/image_720-1387x780.jpg" alt="" />
                <h4>So how fast is the Brabus Shadow 1200
                </h4>
                <p>We Sea trial in Mallorca
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/3/b/c/3/3bc37bdc89a52d76c33205a9dfaa0088bb3b1a2f/Unbenannt-1-1387x780.jpg" alt="" />
                <h4>BRABUS SHADOW 1200 Range
                </h4>
                <p>BIGGER. BOLDER. BRABUS MARINE.
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/6/e/b/a/6eba71e2b209d479437c8c4f75ef0f75891bb511/BRABUS%20Shadow%20900XC%20Black%20Ops%20Signature%20Edition%20klein%20%2811%29-1387x780.jpg" alt="" />
                <h4>BRABUS SHADOW 900 XC CROSS 
                </h4>
                <p>BRABUS SHADOW 900 XC CROSS 
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/d/d/c/8/ddc828bbdfd37ed85380462cbf0f43b8cd4dcad1/Screenshot%20Shadow%20900%20Sun%20Top-1381x780.png" alt="" />
                <h4>BRABUS Shadow 900 SUN-TOP
                </h4>
                <p>Freediving & Beach Fresco
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/1/0/5/9/10599eafbab96b61bc6fc881c814d1d3413e569e/BRABUS%20Shadow%20900%20Depp%20Blue%20Mallorca_Thumbnail-1387x780.jpg" alt="" />
                <h4>BRABUS Shadow 900 Deep Blue
                </h4>
                <p>Heart of The Ocean
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide style={{height : "50vh"}}>
            <div className='slider2div'>
                <img src="https://www.brabus.com/_Resources/Persistent/e/5/7/f/e57fec7a008277a184dc742728d5a377eff2f5d6/image_720-1387x780.jpg" alt="" />
                <h4>So how fast is the Brabus Shadow 1200
                </h4>
                <p>We Sea trial in Mallorca
                </p>
                <div className="posdiv">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
         </SwiperSlide>
       </Swiper>
   );
 }
 