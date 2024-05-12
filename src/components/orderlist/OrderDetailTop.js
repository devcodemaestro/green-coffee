import React from "react";
import { OrderListDetailTopWrap } from "../../styles/OrderListStyle";
import DetailStatus from "./DetailStatus";
import DetailItem from "./DetailItem";

const OrderDetailTop = () => {
  return (
    <OrderListDetailTopWrap>
      <DetailStatus />
      <DetailItem />
      <div className="info">
        <span>김수한무와두루미님 휴대폰 지참해주세요.</span>
      </div>
    </OrderListDetailTopWrap>
  );
};

export default OrderDetailTop;
