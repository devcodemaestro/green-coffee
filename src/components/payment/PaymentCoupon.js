import React from "react";
import { PaymentCouponWrap } from "../../styles/PaymentStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const PaymentCoupon = ({ payload, handlePlusMinus }) => {
  return (
    <PaymentCouponWrap>
      <h3>쿠폰 사용</h3>
      <div className="coupon-use-wrap">
        <div className="coupon-have">
          <span>보유 쿠폰</span>
          <span>5개</span>
        </div>
        <div className="coupon-use">
          <span>사용 쿠폰</span>
          <div>
            <div onClick={() => handlePlusMinus("shot", -1)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div>{payload.shot}</div>
            <div onClick={() => handlePlusMinus("shot", 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
      <div className="coupon-remine-wrap">
        <h3>보유 쿠폰</h3>
        <h3>3개</h3>
      </div>
    </PaymentCouponWrap>
  );
};

export default PaymentCoupon;
