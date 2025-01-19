import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider3.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider3() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}
      >

           <SwiperSlide style={{height:"65vh"}} >
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/6/7/c/b67cf287bf603baaa687a9824d5a743808e298b4/BRABUS%20930_S63%20E%20Performance_On%20Location_sky_klein%20%2835%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 930
                </h4>
                <p>auf Basis Mercedes-AMG S 63 E Performance</p>
            </div>
        </SwiperSlide>
       
       <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/6/4/6/e/646e5ec426ac8cac35250a67c5fcedff14102723/BRABUS_Rocket_1000_M-AMG%20GT%2063_Mars%20%2814%20von%2023%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS ROCKET 1000
                </h4>
                <p>auf Basis Mercedes-AMG GT 63 S E Performance</p>
            </div>
        </SwiperSlide>

        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/6/c/5/9/6c5914a32ead9f878d6091ef27d7180e3a1db95b/BRABUS%20RR%20600%20outdoor%20klein%20%2816%29-1170x780.jpg" alt="" />
                <h4>
                  BRABUS 600
                </h4>
                <p>auf Basis Range Rover P 530</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/5/1/7/b517c6ba22d044ed41dddabda4b52f5c8262cdb1/20230718_Brabus850_-1170x780.jpg" alt="" />
                <h4>
                  BRABUS 850
                </h4>
                <p>auf Basis Mercedes-Maybach S 680</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/8/0/4/2/8042d1357c9900ded2db2cc654fd5a31495b824e/BRABUS%20750%20Cars%20Plus_klein%20%2882%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 750 "BODO BUSCHMANN" EDITION
                </h4>
                <p>auf Basis Mercedes-AMG SL 63 Roadster</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/4/a/a/b4aa4957ed8ad3e146dc222a040c0b3da461339f/Brabus_911-turbo-s_Rocket_900_001-1170x780.jpg" alt="" />
                <h4>
                BRABUS 900 ROCKET R
                </h4>
                <p>auf Basis Porsche 911 Turbo S</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/0/9/5/9/0959c47a02800054e10d9d33d2448791863cccef/Brabus_6x6_XLP_900_DRV_019-1170x780.jpg" alt="" />
                <h4>
                BRABUS XLP 900 6X6 SUPERBLACK
                </h4>
                <p>auf Basis Mercedes-AMG G 63</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/8/0/4/2/8042d1357c9900ded2db2cc654fd5a31495b824e/BRABUS%20750%20Cars%20Plus_klein%20%2882%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 750 "BODO BUSCHMANN" EDITION
                </h4>
                <p>auf Basis Mercedes-AMG SL 63 Roadster</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/c/b/e/7/cbe7319ef801b45fb52e3cb738b13bb68f616b84/Brabus_6x6_XLP_800_EXT_008-1170x780.jpg" alt="" />
                <h4>
                BRABUS XLP 800 6X6 ADVENTURE
                </h4>
                <p>auf Basis Mercedes-AMG G 63</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/5/1/f/f/51ff285f8c600cb0d683be05b0c470061813bd94/BRABUS%20800%204x4%C2%B2%20Stealth%20Green%20Outdoor_klein%20%2886%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 800 4X4² STEALTH GREEN
                </h4>
                <p>auf Basis Mercedes-AMG G 63 4x4²</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/7/a/c/0/7ac054fceac1161c9639bf0e8280512da8791259/BRABUS%20800%204x4%C2%B2%20Superblack%20Outdoor_klein%20%28193%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 800 4X4² SUPERBLACK
                </h4>
                <p>auf Basis Mercedes-AMG G 63 4x4²</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/7/6/e/c/76ec873d516002103ede85c16deb70a456d1a06e/BRABUS%20930-Mercedes-AMG%20GT%2063S%20E%20Performance_Outdoor_FH_klein%20%2818%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 930
                </h4>
                <p>auf Basis Mercedes-AMG GT 63 S E-Performance</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/4/c/d/7/4cd74911d7728947aa6ddd2b7a63c91847443984/BRABUS%20for%20EQS%2053%20Masterpiece_Outdoor_klein%20%2883%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS FOR EQS 53
                </h4>
                <p>auf Basis Mercedes-AMG EQS 53</p>
            </div>
        </SwiperSlide>
        
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/d/f/1/b/df1b46e9d164205f463a430b7424ebe208a76834/BRABUS%20900%20Superblack%20GLS%20Outdoor_CP%20%2822%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 900 Superblack
                </h4>
                <p>auf Basis Mercedes-AMG GLS 63</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/a/b/a/3/aba3ec892b4919e79b2f48c67c2d83e4cc9023cd/BRABUS%20G900%20Deep%20Blue_On_Location_klein%20%284%29-1170x780.jpg" alt="" />
                <h4>
                BRABUS 900 Deep Blue
                </h4>
                <p>auf Basis Mercedes-AMG G 63</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"65vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/9/4/9/b/949b3366c639eaffe739dc71d850384c9140087b/Brabus_Taycan_004-1170x780.jpg" alt="" />
                <h4>
                BRABUS for Taycan
                </h4>
                <p>auf Basis Porsche Taycan Turbo S</p>
            </div>
        </SwiperSlide>
       
        </Swiper>

      <p className="append-buttons">
     
      </p>
    </>
  );
}
