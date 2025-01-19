import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Supercarsslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Supercarsslider(){


    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{height:"90vh"}}
          >
            <SwiperSlide style={{display:"flex",justifyContent:"start",margin:"0px"}}><img src="https://www.brabus.com/_Resources/Persistent/5/3/2/0/5320571be65a0c882934323d1a7c18b92f3dbc94/BRABUS%20930_S63%20E%20Performance_On%20Location_sky_klein%20%2844%29.jpg" alt="" />
             <div className="supcarsliderdiv">
                <p> WE CALL IT - WOLLKMMAN.</p>
                <button>BRABUS 930</button>
             </div>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",justifyContent:"start"}}><img src="https://www.brabus.com/_Resources/Persistent/d/5/a/b/d5ab44fe050dc2307535f289194c95901f737921/BRABUS_Rocket_1000_M-AMG%20GT%2063_HQ%20%2837%20von%2040%29.jpg" alt="" />
             <div className="supcarsliderdiv">
                <p> THE ROCKET REVOLUTION.</p>
                <button className='bt2'>BRABUS ROCKET 1000</button>
             </div>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",justifyContent:"end"}}><img src="https://www.brabus.com/_Resources/Persistent/a/2/d/6/a2d656e78a69d95429ae1d4e883199f4d9b778e3/BRABUS%20RR%20600%20outdoor%20klein%20%2816%29.jpg" alt="" />
             <div className="supcarsliderdiv2">
                <p>INOVATION OF ART</p>
                <button>BRABUS 600</button>
             </div>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",justifyContent:"end",alignItems:"end"}}><img src="https://www.brabus.com/_Resources/Persistent/2/1/2/f/212fd8fd33748e05e68d039c0382a150c2156706/BRABUS%20750%20Cars%20Plus_klein%20%285%29.jpg" alt="" />
             <div className="supcarsliderdiv3">
                <p> BRABUS 750</p>
                <button>LEGENDS NEVER DIE</button>
             </div>
            </SwiperSlide>
            <SwiperSlide style={{display:"flex",justifyContent:"start",alignItems:"end",margin:"10px"}}><img src="https://www.brabus.com/_Resources/Persistent/7/6/5/0/7650a549e8414f1a8986e55c8b9a0a7cbfbae1a4/Brabus_911-turbo-s_Rocket_900_001.jpg" alt="" />
             <div className="supcarsliderdiv4">
                <p>FAST. FASTER. GONE.</p>
                <button className='bt2'>BRABUS 900 ROCKET R</button>
             </div>
            </SwiperSlide>
          </Swiper>
        </>
      );
    
}