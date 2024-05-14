import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner font-nunito mx-auto max-w-96 md:py-12 py-6">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/header.png')] min-h-96 bg-contain bg-center bg-no-repeat"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/start.png')] min-h-96 bg-contain bg-center bg-no-repeat"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/Banner4.png')] min-h-96 bg-contain bg-center bg-no-repeat"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
