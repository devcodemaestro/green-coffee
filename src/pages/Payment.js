import React from "react";
import PaymentCoupon from "../components/payment/PaymentCoupon";
import PaymentItem from "../components/payment/PaymentItem";

const Payment = () => {
  return (
    <div>
      <h2>주문내역</h2>
      <PaymentItem />
      <PaymentCoupon />
      <ul>
        <li>
          <span>주문금액</span>
          <span>14,000원</span>
        </li>
        <li>
          <span>할인금액</span>
          <span>-4,000원</span>
        </li>
        <li>
          <span>최종 결제 금액</span>
          <span>10,000원</span>
        </li>
      </ul>
      <div>
        <button>총 10,000원 결제하기</button>
      </div>
    </div>
  );
};

export default Payment;
