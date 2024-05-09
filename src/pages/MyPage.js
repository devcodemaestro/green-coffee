import React from "react";
import { MyPageWrap } from "../styles/MyPageStyle";
import Item from "../components/mypage/Item";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";

const MyPage = () => {
  const userData = useRecoilValue(UserStateAtom);
  return (
    <MyPageWrap>
      <div>
        <span>{userData.nickname} 님 환영합니다.</span>
      </div>
      <div>
        <span>보유 스탬프: {userData.stamp}점</span>
      </div>
      <div>
        <span>보유 쿠폰: {userData.coupon}장</span>
      </div>
      <Item />
    </MyPageWrap>
  );
};

export default MyPage;
