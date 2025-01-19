import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brabusxawkslider2.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Brabusxawkslider2() {
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
        ><img src="https://www.brabus.com/_Resources/Persistent/e/c/d/0/ecd0e604427709cc49c817332f913a098abae101/AwakexBRABUS_Board%20%289%29-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/b/6/4/3/b643afe98c4d8efcc17bda3013e3882093fefe53/AwakexBRABUS_Board%20%288%29-1170x780.jpg" alt="" /></SwiperSlide>
         <SwiperSlide
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/1/a/1/a/1a1a10e529945647d5a1f3f14159908ebbe6a13e/AwakexBRABUS_Board%20%2819%29-1170x780.jpg" alt="" /></SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/e/e/b/8/eeb87811b927776c19cfb1509aa017fa923c9ca0/AwakexBRABUS_Board%20%2822%29-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/2/3/5/b/235b920efb97027c2246eff328b16a6a5007fbe4/AwakexBRABUS_Board%20%2813%29-1170x780.jpg" alt="" />
        </SwiperSlide>
          <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/8/d/b/e/8dbe00b4cb7aa5d3a62acc79347d7413efef8295/AwakexBRABUS_Board%20%2817%29-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/a/c/f/8/acf8ecf6512efdd799646b50be6f2afa24f11c1b/AwakexBRABUS_Board%20%2840%29-1170x780.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide 
        style={{width:"80%"}}
        ><img src="https://www.brabus.com/_Resources/Persistent/5/6/3/0/5630c0dba19244d6c632b29d71feaad489f2f321/AwakexBRABUS_Boat_and_Board%20%2827%29-1170x780.jpg" alt="" />
        </SwiperSlide>
     </Swiper>
     
    </>
  );
}
