import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


const Banner = () => {
  return (
    <div className="banner font-nunito">
      <Swiper
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="dark:invert" src="/Banner2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="dark:invert" src="/Banner1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="dark:invert" src="/Banner3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
