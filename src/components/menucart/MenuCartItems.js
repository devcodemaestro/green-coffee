import React, { useState } from "react";
import { deleteCart } from "../../api/menuAxios";
import { MenuCartItemsWrap, PaymentBtn } from "../../styles/MenuCartStyle";
import {
  faCircleXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import DropDown from "../DropDown";
const MenuCartItems = ({
  menuCartData,
  openChangeOption,
  totalPrice,
  handleDelete,
  handleIncrease,
  handleDecrease,
  dummy,
}) => {
  const [itemQuantities, setItemQuantities] = useState({});
  const navigate = useNavigate();

  // const handlePayment = async () => {
  //   const updatedItems = menuCartData.map(item => ({
  //     cartmenu_id: item.cartmenu_id,
  //     ice: item.ice,
  //     shot: item.shot,
  //     cream: item.cream,
  //     quantity: itemQuantities[item.cartmenu_id] || 0,
  //   }));
  //   try {
  //     const result = await postPayment(updatedItems);
  //     if (result === 200) {
  //       navigate("/orderlist");
  //     }
  //   } catch {
  //     console.err("결제 오류:");
  //   }
  // };

  const handlePayment = () => {
    navigate("/payment");
  };

  const formatPrice = price => {
    if (price == null) {
      return 0;
    }
    return price.toLocaleString();
  };

  return (
    <MenuCartItemsWrap>
      <div>
        {menuCartData.map(item => (
          <div key={item.cartmenu_id} className="item-wrap">
            <div className="item-img-wrap">
              <img
                src={`${process.env.REACT_APP_BASE_URL}/${item.menu?.menu_imgurl}`}
                alt=""
              />
            </div>
            <div className="item-text-wrap">
              <div>{item.menu?.name}</div>
              {item.menu.category === "goods" ? (
                <>
                  <div>{item.menu.menu_ename}</div>
                  <div>{item.menu.menu_explain}</div>
                </>
              ) : (
                <>
                  <div>
                    <span>
                      Ice:
                      {item.ice == "0"
                        ? "적게"
                        : item.ice == "1"
                          ? "보통"
                          : "많이"}
                    </span>
                    <span>Size: Grande</span>
                  </div>
                  <div>
                    <span>Shot: {item.shot}개</span>
                    <span>Cream: {item.cream}개</span>
                  </div>
                </>
              )}
              <div>{formatPrice(item.menu?.menu_price)}원</div>
            </div>
            <div className="item-price-wrap">
              <div
                className="del-btn"
                onClick={() =>
                  handleDelete(
                    item.menu?.menu_id,
                    item.quantity,
                    item.size,
                    item.ice,
                    item.shot,
                    item.cream,
                  )
                }
              >
                <FontAwesomeIcon icon={faCircleXmark} className="del-bt" />
              </div>
              <div className="pm-icon-wrap">
                {item.menu?.category === "goods" ||
                item.menu?.category === "food" ? (
                  <div className="pm-icon-none" />
                ) : (
                  <div>
                    <button
                      onClick={() => openChangeOption(item.menu?.menu_id)}
                    >
                      옵션변경
                    </button>
                  </div>
                )}
                <div
                  className="pm-icon"
                  onClick={() =>
                    handleDecrease(item.menu?.menu_id, item.quantity)
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div>{item.quantity}</div>
                <div
                  className="pm-icon"
                  onClick={() =>
                    handleIncrease(item.menu?.menu_id, item.quantity)
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="item-bottom">
        <DropDown dummy={dummy} />
        <div className="total-price">
          <div className="price">
            <span>총 주문 금액</span>
            {/* <span>{formatPrice(totalPrice)}원</span> */}
            <span>1,000,000원</span>
          </div>
          <div className="buttons">
            <button onClick={handlePayment}>결제하기</button>
          </div>
        </div>
      </div>
    </MenuCartItemsWrap>
  );
};

export default MenuCartItems;
