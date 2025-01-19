
import './Sliderboats.scss'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Sliderbots(){


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
        slidesPerView={3.4}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:"65vh"}}
      >

<SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/6/c/2/1/6c218a5faf356080900cfbed9e9b491af5e6d559/BRABUS_Shadow_1200_ST_AftCabin_Black_Front_klein-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 1200 SUN-TOP
                </h4>
                <p>
                Phantom Gray Signature Edition
                </p>
            </div>
        </SwiperSlide>
       
        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/8/1/9/b/819bc803f4e97a28836cf20ae205b54a4797995f/AXBR_1200_XC_BlackOps_AftBench_FrontPerspective-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 1200 XC CROSS CABIN   
                </h4>
                <p>
                Black Ops Signature Edition
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/5/5/3/0/55309e58c5c2da80f7229b063c4a3f6f0ffbe028/AXBR_1000_XC_BlackOps_Multistorage_FrontPerspective-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 1000 XC CROSS CABIN
                </h4>
                <p>
                Black Ops Signature Edition
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/5/f/9/5/5f955211f79c45496cb7df69cebb06d71ff6e551/CrossCabin_Storage_BlackOps-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 900 XC CROSS CABIN
                </h4>
                <p>
                Black Ops Signature Edition
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/6/0/7/3/6073779c34db27549f7633ffd6e532f4906d7d99/Suntop_Multistorage_StealthGreen-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 900 SUN-TOP
                </h4>
                <p>
                Stealth Green Signature Edition
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/e/3/9/2/e392d31f1262708c43034207952855afa1e90608/SunTop_AftCabin_DeepBlue-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 900 SUN-TOP
                </h4>
                <p>
                Deep Blue Signature Edition
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/8/a/3/b/8a3b60fc1feffdb6581ba55c835ac3e5b0fef2da/_BRABUS%20Shadow%20500%20Collector%20Render_edit-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 500 CABIN
                </h4>
                <p>
                Black Ops
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/a/6/c/f/a6cf633bd41ce259ff4166a50309627a85fac562/Shadow%20300%20Quantum%20White-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 300 CROSS-TOP
                </h4>
                <p>
                Quantum White (U-Sofa)
                </p>
            </div>
        </SwiperSlide>     

        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/a/6/c/f/a6cf633bd41ce259ff4166a50309627a85fac562/Shadow%20300%20Quantum%20White-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 300 CROSS-TOP
                </h4>
                <p>
                Quantum White (Multistorage)
                </p>
            </div>
        </SwiperSlide>     
        <SwiperSlide style={{height:"60vh"}}>
            <div className="sliderboatsdiv">
                <img src="https://www.brabus.com/_Resources/Persistent/6/c/2/1/6c218a5faf356080900cfbed9e9b491af5e6d559/BRABUS_Shadow_1200_ST_AftCabin_Black_Front_klein-1170x780.jpg" alt="" />
                <h4>
                BRABUS SHADOW 1200 SUN-TOP
                </h4>
                <p>
                Phantom Gray Signature Edition
                </p>
            </div>
        </SwiperSlide>
        
           
       
        </Swiper>

      <p className="append-buttons">
     
      </p>

        </>
    )

}