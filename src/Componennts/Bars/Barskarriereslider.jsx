import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brabusxawkslider1.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Barskarriereslider1() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={-3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{height:"90vh",background:"white",marginTop:"100px"}}
      >
       <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/6/9/1/4691fc8e86796f5dd590bb2b2f17d9cff86654d8/DSC06392-520x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/8/a/4/6/8a460802ef6e259f782e877bac8f7342fd9a8f18/DSC09975-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/6/5/6/7/65676ed14e4b1d568dafc7347a26ea5a8d1a64b5/DSC06621-520x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/0/a/8/b0a83bd69da6b692e2716677d94595188af74223/Brabus%20Rocket%20launch%20084-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"40%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/d/7/6/bd76770b97ddb04b1773e0cacb4160afbeb4ded8/DSC06775-520x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/8/e/2/1/8e211b4e89d9d81fdbe6713bfc0bc6dde492d17e/DSC09718-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/2/d/7/42d76e302fe0237b3b45387f09eef930ae99ea09/20220905_Brabus_MotulEvo_1190130-1170x780.jpg" alt="" />
        </SwiperSlide>
     </Swiper>
     
    </>
  );
}
