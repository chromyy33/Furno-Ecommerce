import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  const urls = [
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
    "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg",
  ];
  return (
    <Swiper
      speed={1000} // Transition speed in ms (for both autoplay and manual swipes)
     
      autoplay={{ pauseOnMouseEnter: true, delay: 3000 }}
      loop
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectCoverflow,
      ]}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
        type: "bullets",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {urls.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
