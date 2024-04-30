import React, { useEffect, useState } from "react";
import Welcome from "../components/home/Welcome";
import HomeSwiper from "../components/home/HomeSwiper";
import PopularMenu from "../components/home/PopularMenu";
import { HomeInner, HomeWrap } from "../styles/HomeStyle";
import { getEvent } from "../api/homeAxios";

const Home = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    getEvent(setEventData);
  }, []);
  return (
    <HomeWrap>
      <HomeInner>
        <div className="home-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/homemain.png`} alt="" />
        </div>
        <Welcome />
        <HomeSwiper eventData={eventData} />
        <PopularMenu />
      </HomeInner>
    </HomeWrap>
  );
};

export default Home;
