import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brabusxawkslider1.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Barstourslider1() {
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
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/0/7/8/407803a715c34181d999ca2a1226c4e7b51e2cff/20211217_Brabus_azubi_1815-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/8/4/d/5/84d566bfb133b5733aa86c1fa11c6b4994eaf34a/DSC_7954-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/0/4/6/e/046e62251e2a8bc8d23388aafd31b70eda3ac23a/DSC_7553-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/6/2/5/0/6250ece15fc3e1631a9a298b8635577c01974980/20200310_Brabus_Bottrop_0764-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/f/1/5/b/f15b7a1e943c5c5596154c578427a737bbadf475/Brabus_Sattlerei_03-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/0/1/5/20152d8413ca6191fc081305989cbe77de1cae32/Brabus_Sattlerei_02-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/5/a/0/0/5a000fbddfa977c8f85107c6b725edcc7022cb57/20210210_Brabus_0997-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/1/e/5/b1e58b3f010cf8383030e13594b4cae8f77fa4bd/20210210_Brabzs_0991-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/4/0/7/8/407803a715c34181d999ca2a1226c4e7b51e2cff/20211217_Brabus_azubi_1815-1170x780.jpg" alt="" />
        </SwiperSlide>
     </Swiper>
     
    </>
  );
}
