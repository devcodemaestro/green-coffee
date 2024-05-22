import React from "react";
import { HomeSwiperWrap } from "../../styles/HomeStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/scss/pagination";
import { Link, useNavigate } from "react-router-dom";

const HomeSwiper = ({ eventData }) => {
  const navigate = useNavigate();

  return (
    <HomeSwiperWrap>
      <div className="inner">
        <div style={{ display: "flex" }}>
          <h3>진행중인 이벤트</h3>
          <Link to="/event">
            <h4
              style={{
                color: "#6A1B1B",
                fontSize: "12px",
                paddingTop: "0.625rem",
                paddingRight: "0.625rem",
              }}
            >
              전체보기
            </h4>
          </Link>
        </div>
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
                <img
                  src={`https://back.green-coffee.shop/${item.imageUrl}`}
                  alt={item.adHead}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HomeSwiperWrap>
  );
};

export default HomeSwiper;
