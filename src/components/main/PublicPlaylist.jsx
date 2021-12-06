import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Publicplaylist = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
        <SwiperSlide>Slide 15</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Publicplaylist;
