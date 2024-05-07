import React from "react";
import { HomeSwiperWrap } from "../../styles/HomeStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/scss/pagination";

const HomeSwiper = ({ eventData }) => {
  return (
    <HomeSwiperWrap>
      <div className="inner">
        <h3>진행중인 이벤트</h3>
        <Swiper
          className="swiper-wrap"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 4000 }}
          spaceBetween={50}
        >
          {eventData?.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="img">
                <img src={`${item.imageUrl}`} alt={item.adHead} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HomeSwiperWrap>
  );
};

export default HomeSwiper;
