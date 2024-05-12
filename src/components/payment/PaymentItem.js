import React from "react";
import { PaymentItemWrap } from "../../styles/PaymentStyle";

const PaymentItem = () => {
  const dummy = [
    {
      id: 1,
      img: "까궁",
      name: "이름",
      ice: "많이",
      size: "Grande",
      shot: 1,
      cream: 1,
      price: 6000,
      TotalPrice: 7000,
      coupon: 5,
    },
    {
      id: 2,
      img: "개구리사진",
      name: "개구리탕",
      ice: "많이",
      size: "Grande",
      shot: 1,
      cream: 1,
      price: 6000,
      TotalPrice: 7000,
      coupon: 5,
    },
    {
      id: 3,
      img: "항아리사진",
      name: "십전대보탕",
      ice: "많이",
      size: "Grande",
      shot: 1,
      cream: 1,
      price: 6000,
      TotalPrice: 7000,
      coupon: 5,
    },
  ];
  return (
    <PaymentItemWrap>
      <div>
        {dummy.map(item => (
          <div key={item.id} className="item-wrap">
            <div className="item-img-wrap">
              <img src={`${item.img}`} alt="" />
            </div>
            <div className="item-text-wrap">
              <div>{item.name}</div>
              <div>Ice: {item.ice}</div>
              <div>Size: {item.size}</div>
              <div>Shot: {item.shot}개</div>
              <div>Cream: {item.cream}개</div>
            </div>
            <div className="item-price-wrap">
              <div>{item.price}원</div>
              <div>{item.TotalPrice}원</div>
            </div>
          </div>
        ))}
      </div>
    </PaymentItemWrap>
  );
};

export default PaymentItem;
