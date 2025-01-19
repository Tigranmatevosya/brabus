import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Aboutslider3.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Aboutslider3() {
  
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
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/a/f/a/7/afa7741c744dda48a8909c320ee9bd2b5802c5c3/Luxury_pic_teaser_XL_Axopard_Shadow900-114-1920x1080.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/4/6/d/c/46dca45cc70aa51930571abd811b3be4be779aee/4_About%20BRABUS%20Marine_Functionality%20set%20%284%29-1920x1080.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/6/b/0/9/6b09c17ba05b38e4c0a9c37b4001791f46f73ddb/4_About%20BRABUS%20Marine_Functionality%20set%20%285%29-1920x1080.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/7/e/9/e/7e9e877c5291d5dee4b2cc3851a8ab7dd120fdc7/Luxury_pic_teaser_XL_Axopard_Shadow900-16-1920x1080.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/1/2/7/0/1270e3ce1dac4f4f5279b0b7b9169ca68e69fe59/4_About%20BRABUS%20Marine_Functionality%20set-1920x1080.jpg" alt="" />
  <div className='videodiv'>
</div>
  </SwiperSlide>

      </Swiper>
    </>
  );
}

