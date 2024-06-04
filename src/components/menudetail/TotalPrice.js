import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TotalPriceWrap } from "../../styles/MenuDetailStyle";

const TotalPrice = ({
  totalEa,
  totalPrice,
  handletotalPM,
  handleAddCart,
  handleCustom,
}) => {
  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <TotalPriceWrap>
      <div className="total-price-wrap">
        <div className="qa-select">
          <span>수량 선택</span>
          <div className="ea-icon-wrap">
            <div className="ea-icon" onClick={() => handletotalPM(-1)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div>{totalEa}</div>
            <div className="ea-icon" onClick={() => handletotalPM(1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        <div className="total-price">
          <div className="price">
            <span>총 주문 금액</span>
            <span>{formatPrice(totalPrice)}원</span>
          </div>
          <div className="buttons">
            <div className="custom" onClick={handleCustom}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <button onClick={handleAddCart}>담기</button>
          </div>
        </div>
      </div>
    </TotalPriceWrap>
  );
};

export default TotalPrice;
