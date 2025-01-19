import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Aboutslider2.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Aboutslider2() {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/d/b/1/e/db1ebcc3c57f159d6c6be7e6db1c2fa0d6857a32/4_About%20BRABUS%20Marine_Luxury%20%282%29-1920x720.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/9/b/1/8/9b184b809fc4ea9c98c9da5aab1933359b24acc7/4_About%20BRABUS%20Marine_Luxury%20%283%29-1920x720.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/7/a/a/6/7aa6b04d305e0d309438107b5084b0e8890f631f/4_About%20BRABUS%20Marine_Luxury%20%284%29-1920x720.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/1/5/1/e/151eb8cc1c02e88414e98e74f9bbd697dc3dc090/4_About%20BRABUS%20Marine_Luxury%20%285%29-1920x720.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/d/2/7/d/d27d0472cf19f30fd8ddab9850916f54654adfbb/Luxury_pic_teaser_XL_662A8319-1920x720.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

      </Swiper>
    </>
  );
}

