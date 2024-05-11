import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderBtn, PutBtn } from "../../styles/ui/buttons";
import { TotalPriceWrap } from "../../styles/MenuDetailStyle";

const TotalPrice = () => {
  return (
    <TotalPriceWrap>
      <div className="buttons">
        <PutBtn>담기</PutBtn>
        <OrderBtn>주문하기</OrderBtn>
      </div>
      <div className="total-price-wrap">
        <div className="qa-select">
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div>1</div>
          <div>
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </div>
        <div className="total-price">500원</div>
      </div>
    </TotalPriceWrap>
  );
};

export default TotalPrice;
