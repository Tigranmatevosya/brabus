import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Brabushistory.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Brabushistoryslider() {
  
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{width:"100%",height:"100vh"}}
      >
        
<SwiperSlide >
<video  autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/3/2/0/c/320c4e1cac8619d0646fb320db1112663ca2bf3e/BRABUS%20History%20Web_Breitbild_scharf_1.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide >
<video    autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/8/3/3/f/833f54bb96109434285235ea76c8a7ca62df8521/1970s_pc_header_WEB.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide    >
<video    autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/a/1/3/0/a13060a6b1da7252bc3ce3e95438cfc71d7da426/1980s_pc_header_WEB.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide  >
<video    autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/b/f/f/7/bff747938b11922b231d78b7c3842c203e5ad0f3/1990s_pc_header_WEB%20ohne%20Bodo_.mp4#t=0.5" />
</video>
 
</SwiperSlide>
<SwiperSlide   >
<video    autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/5/c/d/4/5cd4abb38e6cbb650786e4850e03c6f34083e023/2000s_comp_pc_header_WEB.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide  >
<video   autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/3/f/6/0/3f60a645bb222ac2cc886cf148dfc483d64eef32/2010s_comp_pc_header_WEB.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide  >
<video   autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/3/f/b/e/3fbeec5f97bf91954c5fc3bf5e5de6fe5d253b1d/2020s_comp_pc_header_WEB.mp4#t=0.5" />
</video>

</SwiperSlide>
<SwiperSlide    >
<video   autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/7/7/2/f/772f6a3644622fc76100c3eb61841458b85fc6b9/2020_2708x1080.mp4#t=0.5" />
</video>

</SwiperSlide>

<SwiperSlide  >
<video  autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/f/b/f/5/fbf5ded183ab48f02b3678f07d3f569312231308/2021_2708x1080.mp4#t=0.5" />
</video>
 
</SwiperSlide>
<SwiperSlide >
<video   autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/3/2/f/2/32f2a24bc223d99547e7cbbbb1dc12c7c838ddb4/2022_2708x1080.mp4#t=0.5" />
</video>

</SwiperSlide>

      </Swiper>
    </>
  );
}

