import React from "react";
import { HomeWelcomWrap } from "../../styles/HomeStyle";

const Welcome = () => {
  return (
    <HomeWelcomWrap>
      <div className="inner">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/coffee.png`} alt="" />
        </div>
        <div>
          <div className="welcome">
            <span>
              회원 님
              <br /> 환영합니다.
            </span>
          </div>
          <div className="coupon">
            <span>마이 스탬프: 5장</span>
            <span>마이 쿠폰: 1장</span>
          </div>
        </div>
      </div>
    </HomeWelcomWrap>
  );
};

export default Welcome;
