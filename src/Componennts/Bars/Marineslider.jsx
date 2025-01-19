import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Marineslider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Marineslider() {
  
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
        style={{width:"100%",height:"100%"}}
      >
        
<SwiperSlide  style={{width:"100%",height:"100%"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/8/8/4/f/884fc1ddd982e180d8d690465e53ab7400bd529e/DJI_20240906182443_0068_D-edit-1920x1280.jpg" alt="" />
  <div className='videodiv'>
<div>A TRUE RULEBREACKER</div>
<button>BRABUS SHADOW 1000</button>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100%"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/4/3/2/a/432ad5cb61c46787090723bcf8c4bc2b507bfe0a/AwakexBRABUS_Boat_and_Board%20%2858%29.jpg" alt="" />
  <div className='videodiv'>
<div>BRABUSIZE THE WAVES</div>
<button>BRABUS X AWAKE</button>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100%"}}>
  <img style={{width:"100%",height:"100%"}} src="https://www.brabus.com/_Resources/Persistent/3/e/2/4/3e247abc096086266dc8d54206d537c12667d94c/BRABUS%20Shadow%201200%20Sun-Top%20Phantom%20Gray%20Signature%20Edition_0X0A0674.jpg" alt="" />
  <div className='videodiv'>
<div>EXTREME. EPIC. LEGENDARY.</div>
<button>BRABUS SHADOW 1200</button>
</div>
  </SwiperSlide>

  <SwiperSlide  style={{width:"100%",height:"100%"}}  >
<video style={{width:"100%",height:"100%"}}  controls autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/2/3/f/9/23f9257d7dde7f3d2a998be05d05c9dead8282f7/Brabus%20Shadow%201200_WEBTEASER.mp4" />
</video>
<div className='videodiv'>
<div >A NEW DIMENSION OF MASTERCLASS. </div>
<button>BRABUS SHADOW 1200</button>

</div> 
</SwiperSlide>

<SwiperSlide  style={{width:"100%",height:"100%"}}  >
<video style={{width:"100%",height:"100%"}}  controls autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/0/c/6/2/0c625f29f7a9c7f8f83ffbbddc8fd079b8385d8c/Brabus%20Shadow%201000_WEBTEASER.mp4" />
</video>
<div className='videodiv'>
<div >THE SHADOW OF SPEED.</div>
<button>BRABUS SHADOW 1000</button>

</div> 
</SwiperSlide>
  

      </Swiper>
    </>
  );
}

