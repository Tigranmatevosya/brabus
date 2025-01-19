import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider4.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider4() {
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
        spaceBetween={1}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:"58vh"}}
      >

    <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/6/4/3/5/643569ea953d3adadd6ac6102d5b3ac6ac211fa9/A-klassetuning%C3%BCbersicht-1169x780.jpg" alt="" />
                <p>
                 A-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/f/9/d/f/f9df0d951f32a58c960d0d8b7df302f5cf634444/BRABUS%20B30%20based%20on%20MB%20C%20300_Studio_klein%20%2824%29-1170x780.jpg" alt="" />
                <p>
                 C-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/1/2/b/8/12b8747bcc63d885ca9168745fbe6692a5b09965/CLStuning%C3%BCbersicht-1169x780.jpg" alt="" />
                <p>
                 CLS-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/8/f/1/b8f1a7d08ad30a1991b161d81e2a62b8c136f52b/Tuning%C3%BCbersicht%20W213%20%281%29-1170x780.jpg" alt="" />
                <p>
                 E-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/3/f/3/0/3f30d0597c2d9842c9fd80a77d19a5377cd581b9/20220701-002_BRABUS_EQS_3_4_front-1170x780.jpg" alt="" />
                <p>
                 EQS-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/9/3/4/8/9348bf121db01e3a95aa3db2635905a2ebb00037/Gtuning%C3%BCbersicht-1169x780.jpg" alt="" />
                <p>
                 G-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/1/b/2/6/1b26271341479cf4abd8d95f534a9ff57ce20ec3/Tuning%C3%BCbersicht_GLB_X247%20%282%29-1170x780.jpg" alt="" />
                <p>
                 GLB-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/f/c/7/a/fc7a19c73f526b4b4754a6f5fb328a0520692489/002_BRABUS_B30_%28GLC300%29_3_4_front-1170x780.jpg" alt="" />
                <p>
                 GLC-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/d/e/7/3/de73cdbb6060790534864a1857f479c60533a467/002_BR800_GLE_3_4_front-1170x780.jpg" alt="" />
                <p>
                 GLE-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/1/6/c/e/16ce521c3335ea1bb3c0d33e0d07a8b636653168/Tuning%C3%BCbersicht%20GLS%20X167%20%282%29-1170x780.jpg" alt="" />
                <p>
                 GLS-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/7/5/e/7/75e79f3016ec564f4f4eab7cdd782358a9be99cd/002_B930GT_3_4_front-1170x780.jpg" alt="" />
                <p>
                 GT-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/e/3/e/3/e3e339409aa060870894623366163d298b3dfa2c/002_BRABUS_600_SMaybach_3_4_front.-1170x780.jpg" alt="" />
                <p>
                S-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/6/6/7/8/66784a29d9ffcfbd2986a8d17a3bf1fbd4a37744/002_BRABUS_SL750_BB_Edition_3_4_front-1170x780.jpg" alt="" />
                <p>
                 SL-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/3/6/6/6/3666c8a4bd279d4a7c76138c67733e93b9044275/002_BB%2B_3_4_front-1169x780.jpg" alt="" />
                <p>
                V-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/4/2/0/b/420b2f18e4ef2e8d6d1d11d84d36bbc66b67c9f0/002_x_klasse_3_4_front_aufgehellt-1168x780.jpg" alt="" />
                <p>
                X-KLASSE
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/1/9/6/b196a0c65cd95cd3579ad1515f7b965013cfe008/BRABUS%20820%20based%20on%20911%20Turbo%20S%20Cabriolet_klein%20%287%29-1170x780.jpg" alt="" />
                <p>
                BRABUS FOR PORSHE 911 TURBO
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/4/5/4/2/454231fd88861858798e537a6b4ad3821366a9ec/BRABUS%20for%20Porsche%20Taycan%20Turbo%20S%20Studio_klein%20%2840%29-1170x780.jpg" alt="" />
                <p>
                BRABUS FOR PORSHE 911 TAYCAN
                 </p>
                
            </div>
        </SwiperSlide>
       
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/3/4/b/0/34b063ef39d426a91a6719eee0493fca7900c39c/BRABUS%20RANGE%20ROVER%20600%20Studio_klein%20%2846%29-1170x780.jpg" alt="" />
                <p>
                BRABUS FOR RANGE ROVER
                 </p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"55vh"}}>
            <div className="slider4div">
                <img src="https://www.brabus.com/_Resources/Persistent/7/d/e/3/7de3f5a416e29f39135ae685ae66c3ce6283c071/002_BRABUS%20Select%20Rolls%20Royce%20Ghost_3_4_front-1170x780.jpg" alt="" />
                <p>
                BRABUS FOR ROLLS-ROYCE GHOST
                 </p>
                
            </div>
        </SwiperSlide>
      
        </Swiper>

      <p className="append-buttons">
     
      </p>
    </>
  );
}
