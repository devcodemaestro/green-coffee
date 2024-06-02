import React from "react";
import { PaymentItemWrap } from "../../styles/PaymentStyle";

const PaymentItem = ({ menuData }) => {
  return (
    <PaymentItemWrap>
      <div>
        {menuData?.map(item => (
          <div key={item.cartmenu_id} className="item-wrap">
            <div className="item-img-wrap">
              <img
                src={`https://back.green-coffee.shop/${item?.menu.menu_imgurl}`}
                alt=""
              />
            </div>
            <div className="item-text-wrap">
              <div>{item?.menu.name}</div>
              {item.menu.category === "goods" ? (
                <>
                  <div>{item.menu.menu_ename}</div>
                  <div>{item.menu.menu_explain}</div>
                  <div>상품 이미지는 이미지컷으로</div>
                  <div>실제 메뉴와 다를 수 있습니다.</div>
                </>
              ) : (
                <>
                  <div>
                    Size:{" "}
                    {item.size == "0"
                      ? "Tall"
                      : item.size == "1"
                        ? "Grande"
                        : "Venti"}
                  </div>
                  <div>
                    Ice:{" "}
                    {item.ice == "0"
                      ? "적게"
                      : item.ice == "1"
                        ? "보통"
                        : "많이"}
                  </div>
                  <div>Shot: {item.shot}개</div>
                  <div>Cream: {item.cream}개</div>
                </>
              )}
            </div>
            <div className="item-price-wrap">
              <div>{item?.menu.menu_price.toLocaleString()}원</div>
              <div>총 {item.quantity}건</div>
              <div>{item?.subCartPrice.toLocaleString()}원</div>
            </div>
          </div>
        ))}
      </div>
    </PaymentItemWrap>
  );
};

export default PaymentItem;
