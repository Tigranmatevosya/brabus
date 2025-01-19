import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Saleslider.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Saleslider() {
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
        spaceBetween={3}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:"65vh"}}
      >

              <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/b/e/7/bbe7267020e615800526645afd056905a1614a17/TeaserSlider_neu_Bikes-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Motorräder
                </h4>
            </div>
        </SwiperSlide>
          <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/4/7/b/d/47bdcf120e6b7888dabb75074fd5f330316cc4e6/TeaserSlider_neu_Classics-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Classics
                </h4>
            </div>
        </SwiperSlide> 

<SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/3/b/0/b3b0c09221549d7b8749bd94dead6d5e8566c053/TeaserSlider_neu_Boats-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Superboats
                </h4>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/3/1/b/f/31bf6293201ebd9ba9e1c21e7245ef89ab043be4/TeaserSlider_neu_Anfrage-1170x780.jpg" alt="" />
                <h4>
                Fragen Sie ihr Traumauto an!
                </h4>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/e/e/b/7/eeb71d15f76caf2688600534953bf032c96589fc/TeaserSlider_neu_Highlights-1170x780.jpg" alt="" />
                <h4>
                Exklusive Auswahl
                </h4>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/f/6/e/a/f6ea256767800f9226b3744e03724487ce36fc17/TeaserSlider_neu_Cars-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Fahrzeuge
                </h4>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/b/b/e/7/bbe7267020e615800526645afd056905a1614a17/TeaserSlider_neu_Bikes-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Motorräder
                </h4>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"60vh"}}>
            <div className="slider3div">
                <img src="https://www.brabus.com/_Resources/Persistent/4/7/b/d/47bdcf120e6b7888dabb75074fd5f330316cc4e6/TeaserSlider_neu_Classics-1170x780.jpg" alt="" />
                <h4>
                Verfügbare Classics
                </h4>
            </div>
        </SwiperSlide>      
        </Swiper>

      <p className="append-buttons">
     
      </p>
    </>
  );
}
