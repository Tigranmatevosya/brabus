import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Aboutslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Aboutslider() {
  
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{width:"100%",height:"100vh"}}
      >
        
<SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/8/d/d/1/8dd15ce772098e1f32e5d03ad15b79432001fce8/4_About%20BRABUS%20Marine_Performance_XL%20%284%29-1920x1080.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/f/1/1/1/f111a629da271ae49a910edcab408ca7ea82cdcf/4_About%20BRABUS%20Marine_Performance_XL%20%286%29-1920x1080.jpg " alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

      </Swiper>
    </>
  );
}

