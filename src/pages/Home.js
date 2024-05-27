import React, { useEffect, useState } from "react";
import Welcome from "../components/home/Welcome";
import HomeSwiper from "../components/home/HomeSwiper";
import PopularMenu from "../components/home/PopularMenu";
import { HomeInner, HomeWrap } from "../styles/HomeStyle";
import { getEvent, getPopularMenu } from "../api/homeAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import { AuthStateAtom } from "../recoil/atoms/AuthState";

const Home = () => {
  const [eventData, setEventData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const authData = useRecoilValue(AuthStateAtom);
  const userData = useRecoilValue(UserStateAtom);

  useEffect(() => {
    getEvent(setEventData);
    getPopularMenu(setPopularData);
  }, []);
  console.log(authData);
  console.log(userData);
  return (
    <HomeWrap>
      <HomeInner>
        <div className="home-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/homemain.png`} alt="" />
        </div>
        <Welcome />
        <HomeSwiper eventData={eventData} />
        <PopularMenu popularData={popularData} />
      </HomeInner>
    </HomeWrap>
  );
};

export default Home;
