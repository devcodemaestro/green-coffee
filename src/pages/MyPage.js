import React from "react";
import { MyPageWrap } from "../styles/MyPageStyle";
import Item from "../components/mypage/Item";

const MyPage = () => {
  const dummyData = {
    name: "김수한무",
    point: "1,234,560",
    coupon: "1,000",
  };
  return (
    <MyPageWrap>
      <div>
        <span>{dummyData.name} 님 환영합니다.</span>
      </div>
      <div>
        <span>보유 포인트: {dummyData.point}점</span>
      </div>
      <div>
        <span>보유 스탬프: {dummyData.coupon}장</span>
      </div>
      <Item />
    </MyPageWrap>
  );
};

export default MyPage;
