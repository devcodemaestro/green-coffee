import React from "react";
import TotalPrice from "../menudetail/TotalPrice";

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
      img: "까궁",
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
      img: "까궁",
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
  return <div>PaymentItem</div>;
};

export default PaymentItem;
