import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Supboatsslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Supboatsslider() {
  
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
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/d/2/d/a/d2dae3408dfef1e4a79d581ae4328b23b4646374/2_BRABUS_Shadow900Sun-Top_3-1920x1080.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
<div>CONFIDENT</div>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/2/9/0/c/290cc8eaafc7493da49904a53e622f0c586da353/2_BRABUS_Shadow900_1-1920x1080.jpg" alt="" />
  <div className='videodiv'>
<div>A TRUE RULEBREACKER</div>
</div>
  </SwiperSlide>

      </Swiper>
    </>
  );
}

