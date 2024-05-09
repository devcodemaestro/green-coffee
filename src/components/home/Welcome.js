import React from "react";
import { HomeWelcomWrap } from "../../styles/HomeStyle";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../../recoil/atoms/UserState";

const Welcome = () => {
  const userInfo = useRecoilValue(UserStateAtom);
  console.log(userInfo);
  return (
    <HomeWelcomWrap>
      <div className="inner">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/icons/mstile-144x144.png`}
            alt=""
          />
        </div>
        <div>
          <div className="welcome">
            <span>
              {userInfo?.nickname}회원 님
              <br /> 환영합니다.
            </span>
          </div>
          <div className="coupon">
            <span>마이 스탬프: {userInfo?.stamp}장</span>
            <span>마이 쿠폰: {userInfo?.coupon}장</span>
          </div>
        </div>
      </div>
    </HomeWelcomWrap>
  );
};

export default Welcome;
