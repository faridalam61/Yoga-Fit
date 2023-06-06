import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slider1 from "../../assets/1.jpg";
import slider2 from "../../assets/2.jpg";
import Slides from "./Slides";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slides image={slider1} heading="Serenity is inside you" />
        </SwiperSlide>
        <SwiperSlide>
          <Slides image={slider2} heading="Flexibility is a second power" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
