import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Brabusxktmlider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Brabusxktmlider() {
  
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
        style={{width:"100%",height:"80vh"}}
      >
        
<SwiperSlide  style={{width:"80%",height:"80vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/8/f/b/1/8fb1d16a6fcf8d44f2bb94a7e073b8bdfa444c4e/BRABUS%201300%20R%20Masterpiece_Outdoor%20%2848%29-1170x780.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>
  <SwiperSlide  style={{width:"80%",height:"80vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/0/7/e/b/07eb9bffdd83fb4a3a74331221132e2615c8fbea/BRABUS%201300%20R%20Masterpiece_Outdoor%20%2858%29-1170x780.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>
  
  <SwiperSlide  style={{width:"80%",height:"80vh"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/c/1/2/a/c12ade250b9b018f7a98cce1b83a971ac6d09bf5/BRABUS%201300%20R%20Masterpiece_Outdoor%20%2862%29-1170x780.jpg" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"80%",height:"80vh"}}>
  <img style={{width:"100%",height:"100%"}} src="" alt="" />
  <div style={{color:"black"}} className='videodiv'>
</div>
  </SwiperSlide>

      </Swiper>
    </>
  );
}

