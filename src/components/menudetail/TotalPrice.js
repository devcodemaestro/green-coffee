import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TotalPriceWrap } from "../../styles/MenuDetailStyle";

const TotalPrice = ({ totalEa, totalPrice, handletotalPM, handleAddCart }) => {
  return (
    <TotalPriceWrap>
      <div className="total-price-wrap">
        <div className="qa-select">
          <span>수량 선택</span>
          <div className="ea-icon-wrap">
            <div className="ea-icon" onClick={() => handletotalPM(1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>{totalEa}</div>
            <div className="ea-icon" onClick={() => handletotalPM(-1)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </div>
        <div className="total-price">
          <div className="price">
            <span>총 주문 금액</span>
            <span>{totalPrice}원</span>
          </div>
          <button onClick={handleAddCart}>담기</button>
        </div>
      </div>
    </TotalPriceWrap>
  );
};

export default TotalPrice;
