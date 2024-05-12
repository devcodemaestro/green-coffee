import React, { useState } from "react";
import PaymentCoupon from "../components/payment/PaymentCoupon";
import PaymentItem from "../components/payment/PaymentItem";
import { PaymentWrap } from "../styles/PaymentStyle";

const Payment = () => {
  const [payload, setPayload] = useState({
    ice: 0,
    shot: 0,
    cream: 0,
    price: 0,
    totalPrice: 0,
    discountPrice: 0,
    useCoupon: 0,
  });
  const handlePlusMinus = (option, value) => {
    setPayload(prev => {
      const newValue = prev[option] + value;

      const updatedValue = newValue < 0 ? 0 : newValue;
      return {
        ...prev,
        [option]: updatedValue,
      };
    });
  };
  return (
    <PaymentWrap>
      <h2>주문내역</h2>
      <PaymentItem />
      <PaymentCoupon payload={payload} handlePlusMinus={handlePlusMinus} />
      <ul className="total-price-wrap">
        <li>
          <h3>주문금액</h3>
          <h3>14,000원</h3>
        </li>
        <li>
          <h3>할인금액</h3>
          <h3>-4,000원</h3>
        </li>
        <li>
          <h3>최종 결제 금액</h3>
          <h3>10,000원</h3>
        </li>
      </ul>
      <div className="buttons">
        <button>총 10,000원 결제하기</button>
      </div>
    </PaymentWrap>
  );
};

export default Payment;
