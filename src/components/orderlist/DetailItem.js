import React from "react";
import { DetailItemWrap } from "../../styles/OrderListStyle";

const DetailItem = () => {
  return (
    <DetailItemWrap>
      <div>
        <span>주문접수</span>
        <span>2024.05.13</span>
        <span>11:15</span>
      </div>
      <div>
        <span>주문승인</span>
        <span>2024.05.13</span>
        <span>11:15</span>
      </div>
      <div>
        <span>준비완료</span>
        <span>2024.05.13</span>
        <span>11:15</span>
      </div>
    </DetailItemWrap>
  );
};

export default DetailItem;
